"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 10, name: 'Twilight Sparkle' },
            { id: 11, name: 'Sunset Shimmer' },
            { id: 12, name: 'Vinyl Scratch' },
            { id: 13, name: 'Bon Bon' },
            { id: 14, name: 'Lyra' },
            { id: 15, name: 'Starlight Glimmer' },
            { id: 16, name: 'Rainbow Dash' },
            { id: 17, name: 'Applejack' },
            { id: 18, name: 'Rarity' },
            { id: 19, name: 'Fluttershy' },
            { id: 20, name: 'Pinkie Pie' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map