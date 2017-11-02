function Bagulaa( bornPlace) {
    this.where = bornPlace;
};

/***
 * otro comentario mas
 * */
Bagulaa.prototype.bumpsInto = function bumpsInto( anCharacterOrObject ) {
    return anCharacterOrObject.bumpsIntoBagulaa(this);
};

module.exports = Bagulaa;

