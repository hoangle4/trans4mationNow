module.exports = function(sequelize, DataTypes) {
	const User = sequelize.define('User', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
			validate: {
				len: [ 1 ]
			}
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		avatar: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		admin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
			validate: {
				len: [ 1 ]
			}
		}
	});

	User.associate = function(models) {};

	return User;
};
