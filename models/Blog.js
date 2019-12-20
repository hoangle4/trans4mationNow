module.exports = function(sequelize, DataTypes) {
	const Blog = sequelize.define('Blog', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		subtitle: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		notes: {
			type: DataTypes.STRING,
			allowNull: false
		},
		photo: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true
		}
	});

	Blog.associate = function(models) {
		Blog.belongsTo(models.User);
		Blog.hasMany(models.Comment);
	};

	return Blog;
};
