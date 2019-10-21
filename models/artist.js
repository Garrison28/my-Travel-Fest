'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    songKickArtistId: DataTypes.INTEGER,
    displaName: DataTypes.STRING,
    uri: DataTypes.STRING,
    onTourUntil: DataTypes.DATE
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
  };
  return artist;
};