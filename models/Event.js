module.exports = function(sequelize, DataTypes) {
	const Event = sequelize.define('Event', {
		// Giving the User model a name of type STRING
		eventId: {
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
		eventDesc: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		eventDate: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		profileFolder: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		}
	});

	Event.associate = function(models) {};

	return Event;
};
