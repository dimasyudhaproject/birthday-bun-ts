import {
  Model,
  DataTypes,
  Sequelize,
  Optional
} from 'sequelize';

interface UserAttributes {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  birthday: Date;
  location: {
    timezone: string;
  };
  created_at?: Date;
  updated_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public birthday!: Date;
  public location!: {
    timezone: string;
  };
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const initializeUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      location: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      sequelize,
      tableName: 'users',
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  return User;
};

export { User, initializeUserModel };  