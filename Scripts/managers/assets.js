var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Asset Manager
var managers;
(function (managers) {
    var assetManifest = [
        // Audio
        { id: "gunFire", src: "./Assets/audio/gun_fire.wav" },
        { id: "endSound", src: "./Assets/audio/endbgs.mp3" },
        { id: "zombieHit", src: "./Assets/audio/zombie_hit.mp3" },
        { id: "backgroundMusic", src: "./Assets/audio/Day of Chaos.mp3" },
        { id: "backgroundStart", src: "./Assets/audio/Bump in the Night.mp3" },
        // Images
        { id: "startBtn", src: "./Assets/startButton.png" },
        { id: "reStartBtn", src: "./Assets/reStartButton.png" },
        { id: "player", src: "./Assets/images/player_test.png" },
        { id: "zombie", src: "./Assets/images/zombie_test.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "level1BG", src: "./Assets/images/Level1BG.png" },
        { id: "level2BG", src: "./Assets/images/Level2BG.png" },
        { id: "leftWallTop", src: "./Assets/images/walls/leftWallTop.png" },
        { id: "leftWallBottom", src: "./Assets/images/walls/leftWallBottom.png" },
        { id: "topWall", src: "./Assets/images/walls/topWall.png" },
        { id: "bottomWall", src: "./Assets/images/walls/bottomWall.png" },
        { id: "rightWallBath", src: "./Assets/images/walls/rightWallBath.png" },
        { id: "mainGateWallLeft", src: "./Assets/images/walls/mainGateWallLeft.png" },
        { id: "mainGateWallRight", src: "./Assets/images/walls/mainGateWallRight.png" },
        { id: "insideHorizontalWall", src: "./Assets/images/walls/insideHorizontalWall.png" },
        { id: "insideVerticalWall", src: "./Assets/images/walls/insideVerticalWall.png" },
        { id: "rightWall", src: "./Assets/images/walls/rightWall.png" },
        { id: "windowLeft", src: "./Assets/images/window/windowLeft.png" },
        { id: "windowRight", src: "./Assets/images/window/windowRight.png" },
        { id: "level2_wallLeftTop", src: "./Assets/images/walls/level2_wallLeftTop.png" },
        { id: "level2_wallLeftBottom", src: "./Assets/images/walls/level2_wallLeftBottom.png" },
        { id: "level2_wallBottomLeft", src: "./Assets/images/walls/level2_wallBottomLeft.png" },
        { id: "level2_wallRight", src: "./Assets/images/walls/level2_wallRight.png" },
        { id: "level2_windowLeft", src: "./Assets/images/window/level2_windowLeft.png" },
        { id: "level2_windowRight", src: "./Assets/images/window/level2_windowRight.png" },
        { id: "startimage", src: "./Assets/images/startimage.jpg" },
        { id: "blackout", src: "./Assets/images/blackout.jpg" },
        { id: "endimage", src: "./Assets/images/endimage.jpg" }
    ];
    var AssetManager = /** @class */ (function (_super) {
        __extends(AssetManager, _super);
        function AssetManager() {
            var _this = _super.call(this) || this;
            _this.manifest = new Array();
            _this.manifest = assetManifest;
            _this.installPlugin(createjs.Sound);
            _this.loadManifest(_this.manifest);
            return _this;
        }
        AssetManager.prototype.addItem = function (id, src) {
            this.manifest.push({ id: id, src: src });
            this.loadManifest(this.manifest);
        };
        return AssetManager;
    }(createjs.LoadQueue));
    managers.AssetManager = AssetManager;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map