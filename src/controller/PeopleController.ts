import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import People from '../models/People';

const peopleController = {
  async read(request: Request, response: Response): Promise<People | any> {
    let { offset, limit } = request.query;

    try {
      const people = await getRepository(People)
        .createQueryBuilder('people')
        .orderBy('people.created_at', 'DESC')
        .skip(Number(offset === undefined ? (offset = '0') : offset))
        .take(Number(limit === undefined ? (limit = '5') : limit))
        .getMany();

      const total = await getRepository(People)
        .createQueryBuilder('people')
        .getCount();

      const paginationInfo = {
        offset,
        limit,
        total,
      };

      return response.status(200).json({ people, paginationInfo });
    } catch (error) {
      return response.status(400).json({
        message: 'Ocorreu um erro ao tentar ler os dados.',
        error,
      });
    }
  },

  async detail(request: Request, response: Response): Promise<People | any> {
    const { id } = request.params;

    try {
      const person = await getRepository(People)
        .createQueryBuilder('people')
        .where('id = :id', { id })
        .getOne();

      return response.status(200).json({ person });
    } catch (error) {
      return response.status(400).json({
        message: 'Ocorreu um erro ao tentar ler os dados.',
        error,
      });
    }
  },

  async create(request: Request, response: Response): Promise<People | any> {
    const { name, age, cpf, marital_status, state, city } = request.body;

    const peopleRepository = getRepository(People);

    try {
      const cpfAlreadyExist = await peopleRepository.findOne({
        where: { cpf },
      });

      if (cpfAlreadyExist) {
        return response
          .status(400)
          .json({ message: 'Este CPF já está sendo utilizado.' });
      }

      const newPerson = peopleRepository.create({
        name,
        age,
        cpf,
        marital_status,
        state,
        city,
      });

      const person = await peopleRepository.save(newPerson);

      return response.status(201).json(person);
    } catch (error) {
      return response.status(400).json({
        message: 'Ocorreu um erro ao tentar salvar os dados.',
        error,
      });
    }
  },

  async update(request: Request, response: Response): Promise<People | any> {
    const { id } = request.params;
    const { name, age, cpf, marital_status, state, city } = request.body;

    try {
      const result = await getRepository(People)
        .createQueryBuilder('people')
        .update(People)
        .set({
          name,
          age,
          cpf,
          marital_status,
          state,
          city,
        })
        .where('id = :id', { id })
        .execute();

      const { affected } = result;

      if (affected && affected <= 0) {
        return response
          .status(400)
          .json({ message: 'Ocorreu um erro ao tentar atualizar os dados.' });
      }

      return response.status(200).json({ message: 'Atualizado com sucesso!' });
    } catch (error) {
      return response.status(400).json({
        message: 'Ocorreu um erro ao tentar atualizar os dados.',
        error,
      });
    }
  },

  async delete(request: Request, response: Response): Promise<People | any> {
    const { id } = request.params;

    try {
      const result = await getRepository(People)
        .createQueryBuilder('people')
        .delete()
        .from(People)
        .where('id = :id', { id })
        .execute();

      const { affected } = result;

      if (!affected && affected === 0) {
        return response
          .status(400)
          .json({ message: 'Ocorreu um erro ao tentar deletar os dados.' });
      }

      return response.status(200).json({ message: 'Deletado com sucesso!' });
    } catch (error) {
      return response.status(400).json({
        message: 'Ocorreu um erro ao tentar deletar os dados.',
        error,
      });
    }
  },
};

export default peopleController;
