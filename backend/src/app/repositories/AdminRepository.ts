import { prisma } from '../database/prisma';
import Admin from '../interfaces/admin.interface'

class AdminRepository {
  create = async (data: Admin) => {
    const admin = await prisma.admin.create({
      data,
      select: {
        id_admin: true, 
        cref: true,
        cnpj: true,
        id_usuario: true,      
      }
    });
    return admin;
  }

  getAll = async () => {
    const admins = await prisma.admin.findMany({
      select: {
        id_admin: true, 
        cref: true,
        cnpj: true,
        id_usuario: true,   
      },
    });
    return admins;
  };

  getById = async (id: number) => {
    const admin = await prisma.admin.findUnique({
      select: {
        id_admin: true, 
        cref: true,
        cnpj: true,
        id_usuario: true,    
      },
      where: {
        id_admin: id
      }
    });
    return admin;
  }

  updateAdmin = async (id: number, data: Admin) => {
    const admin = await prisma.admin.update({
      where: {
        id_admin: id
      },
      data,
      select: {
        id_admin: true, 
        cref: true,
        cnpj: true,
        id_usuario: true,   
      },
    });
    return admin;
  };

  deleteUser = async (id: number) => {
    await prisma.admin.delete({
      where: {
        id_admin: id, 
      },
    });
    return;
  };
};

export default new AdminRepository();
