module.exports = function(sequelize, DataTypes) {
	const Blog = sequelize.define('Blog', {
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
		subtitle: {
			type: DataTypes.STRING(255),
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		description: {
			type: DataTypes.ARRAY(DataTypes.TEXT),
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		notes: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		user: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true
		},
		comment: {
			type: DataTypes.UUID,
			allowNull: false
		}
	});

	Blog.associate = function(models) {
		Blog.belongsTo(models.User);
		Blog.hasMany(models.Comment);
	};

	return Blog;
};
