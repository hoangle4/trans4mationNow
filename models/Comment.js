module.exports = function(sequelize, DataTypes) {
	const Comment = sequelize.define('Comment', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
			validate: {
				len: [ 1 ]
			}
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		user: {
			type: DataTypes.UUID,
			allowNull: false
		}
	});

	Comment.associate = function(models) {};

	return Comment;
};
