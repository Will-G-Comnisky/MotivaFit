import { prisma } from '../database/prisma';
import Address from '../interfaces/address.interface'

class AddressRepository {
  create = async (data: Address) => {
    const adress = await prisma.endereco.create({
      data,
      select: {
        id_endereco: true,
        cep: true,
        cidade: true,
        estado: true,
        uf: true,
        bairro: false,
        endereco: false,
        numero: false,
        complemento: false
      }
    });
    return adress;
  }

  getAll = async () => {
    const adresses = await prisma.endereco.findMany({
      select: {
        id_endereco: true,
        cep: true,
        cidade: true,
        estado: true,
        uf: true,
        bairro: false,
        endereco: false,
        numero: false,
        complemento: false
      },
    });
    return adresses;
  };

  getById = async (id: number) => {
    const adress = await prisma.endereco.findUnique({
      select: {
        id_endereco: true,
        cep: true,
        cidade: true,
        estado: true,
        uf: true,
        bairro: false,
        endereco: false,
        numero: false,
        complemento: false
      },
      where: {
        id_endereco: id
      }
    });
    return adress;
  }

  updateAddress = async (id: number, data: Address) => {
    const adress = await prisma.endereco.update({
      where: {
        id_endereco: id
      },
      data,
      select: {
        id_endereco: true,
        cep: true,
        cidade: true,
        estado: true,
        uf: true,
        bairro: false,
        endereco: false,
        numero: false,
        complemento: false
      },
    });
    return adress;
  };

  deleteAddress = async (id: number) => {
    await prisma.endereco.delete({
      where: {
        id_endereco: id
      },
    });
    return;
  };
};

export default new AddressRepository();
