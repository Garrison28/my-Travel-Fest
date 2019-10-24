'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    songKickArtistId: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    onTourUntil: DataTypes.STRING,
    interestLevel: DataTypes.INTEGER
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
    models.artist.belongsToMany(models.user, { through: 'usersArtists'});
  };
  return artist;
};