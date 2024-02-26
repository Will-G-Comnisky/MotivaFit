import { prisma } from '../database/prisma';
import Admin from '../interfaces/admin.interface'

class AdminRepository {
  create = async (data: Admin) => {
    const admin = await prisma.admin.create({
      data,
      include: {
        usuario: {
          include: {
            endereco: true
          }
        },
      }
    });
    return admin;
  }

  getAll = async () => {
    const admins = await prisma.admin.findMany({
      include: {
        usuario: {
          include: {
            endereco: true
          }
        },
      }
    });
    return admins;
  };

  getById = async (id: number) => {
    const admin = await prisma.admin.findUnique({
      where: {
        id_admin: id
      },
      include: {
        usuario: {
          include: {
            endereco: true
          }
        },
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
      include: {
        usuario: {
          include: {
            endereco: true
          }
        },
      }
    });
    return admin;
  };

  deleteAdmin = async (id: number) => {
    await prisma.admin.delete({
      where: {
        id_admin: id, 
      },
    });
    return;
  };
};

export default new AdminRepository();
