import { User } from '../entities/User';
import { Op } from 'sequelize';

class UserRepository {
  /**
   * @param userData
   * @returns Promise<User>
   */
  public async createUser(userData: Omit<User, 'id'>): Promise<User> {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error(`Failed to create user: ${(error as Error).message}`);
    }
  }

  /**
   * @param userId
   * @returns Promise<User | null>
   */
  public async getUserById(userId: string): Promise<User | null> {
    return User.findByPk(userId);
  }

  /**
   * @param userId
   * @returns Promise<void>
   */
  public async deleteUser(userId: string): Promise<void> {
    try {
      const user = await this.getUserById(userId);
      if (user) {
        await user.destroy();
      } else {
        throw new Error(`User with ID: ${userId} not found`);
      }
    } catch (error) {
      throw new Error(`Failed to delete user: ${(error as Error).message}`);
    }
  }

  /**
   * @param userId
   * @param updates
   * @returns Promise<User | null>
   */
  public async updateUser(userId: string, updates: Partial<User>): Promise<User | null> {
    try {
      const user = await this.getUserById(userId);
      if (!user) {
        throw new Error(`User with ID: ${userId} not found`);
      }
      await user.update(updates);
      return user;
    } catch (error) {
      throw new Error(`Failed to update user: ${(error as Error).message}`);
    }
  }

  /**
   * @returns Promise<User[]>
   */
  public async getUsersWithBirthdayToday(): Promise<User[]> {
    const currentDate = new Date();
    return User.findAll({
      where: {
        birthday: {
          [Op.eq]: currentDate,
        },
      },
    });
  }
}

export default new UserRepository();