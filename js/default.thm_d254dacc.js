window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.TextInput":"resource/eui_skins/TextInputSkin.exml"};generateEUI.paths['resource/eui_skins/Common/DDZBackButtonUI.exml'] = window.DDZBackButtonUI = (function (_super) {
	__extends(DDZBackButtonUI, _super);
	function DDZBackButtonUI() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.height = 48;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 70;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","btn_back_on@2x_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = DDZBackButtonUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "btn_back@2x_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf9ef44;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return DDZBackButtonUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/DDZGrayPopupCloseButtonUI.exml'] = window.DDZGrayPopupCloseButtonUI = (function (_super) {
	__extends(DDZGrayPopupCloseButtonUI, _super);
	var DDZGrayPopupCloseButtonUI$Skin1 = 	(function (_super) {
		__extends(DDZGrayPopupCloseButtonUI$Skin1, _super);
		function DDZGrayPopupCloseButtonUI$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_gray_popup_close_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZGrayPopupCloseButtonUI$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_gray_popup_close@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGrayPopupCloseButtonUI$Skin1;
	})(eui.Skin);

	function DDZGrayPopupCloseButtonUI() {
		_super.call(this);
		this.skinParts = ["closeButton"];
		
		this.height = 58;
		this.width = 58;
		this.elementsContent = [this.closeButton_i()];
	}
	var _proto = DDZGrayPopupCloseButtonUI.prototype;

	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.percentHeight = 100;
		t.label = "";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.skinName = DDZGrayPopupCloseButtonUI$Skin1;
		return t;
	};
	return DDZGrayPopupCloseButtonUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/DDZTransparentCoverUI.exml'] = window.DDZTransparentCoverUI = (function (_super) {
	__extends(DDZTransparentCoverUI, _super);
	function DDZTransparentCoverUI() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = DDZTransparentCoverUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.strokeAlpha = 0.4;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return DDZTransparentCoverUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/QPAlertUI.exml'] = window.QPAlertUI = (function (_super) {
	__extends(QPAlertUI, _super);
	var QPAlertUI$Skin2 = 	(function (_super) {
		__extends(QPAlertUI$Skin2, _super);
		function QPAlertUI$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_alert_cancel_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QPAlertUI$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_alert_cancel@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QPAlertUI$Skin2;
	})(eui.Skin);

	var QPAlertUI$Skin3 = 	(function (_super) {
		__extends(QPAlertUI$Skin3, _super);
		function QPAlertUI$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_alert_ok_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QPAlertUI$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_alert_ok@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QPAlertUI$Skin3;
	})(eui.Skin);

	var QPAlertUI$Skin4 = 	(function (_super) {
		__extends(QPAlertUI$Skin4, _super);
		function QPAlertUI$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_alert_ok_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QPAlertUI$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_alert_ok@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QPAlertUI$Skin4;
	})(eui.Skin);

	function QPAlertUI() {
		_super.call(this);
		this.skinParts = ["titleLabel","messageLabel","cancelAndOkGroupCancelButton","cancelAndOkGroupOkButton","cancelAndOkGroup","okButton","okGroup","popupGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._DDZTransparentCover1_i(),this.popupGroup_i()];
	}
	var _proto = QPAlertUI.prototype;

	_proto._DDZTransparentCover1_i = function () {
		var t = new DDZTransparentCover();
		t.skinName = "DDZTransparentCoverUI";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.popupGroup_i = function () {
		var t = new eui.Group();
		this.popupGroup = t;
		t.height = 338;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 572;
		t.elementsContent = [this._Rect1_i(),this.titleLabel_i(),this.messageLabel_i(),this.cancelAndOkGroup_i(),this.okGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "";
		t.textColor = 0x000000;
		t.top = 38;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.Label();
		this.messageLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "无法连接到服务器";
		t.textAlign = "center";
		t.textColor = 0x882f00;
		t.verticalAlign = "middle";
		t.verticalCenter = -29;
		t.width = 500;
		return t;
	};
	_proto.cancelAndOkGroup_i = function () {
		var t = new eui.Group();
		this.cancelAndOkGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 25;
		t.height = 95;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 519;
		t.elementsContent = [this.cancelAndOkGroupCancelButton_i(),this.cancelAndOkGroupOkButton_i()];
		return t;
	};
	_proto.cancelAndOkGroupCancelButton_i = function () {
		var t = new eui.Button();
		this.cancelAndOkGroupCancelButton = t;
		t.horizontalCenter = -127;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 29;
		t.skinName = QPAlertUI$Skin2;
		return t;
	};
	_proto.cancelAndOkGroupOkButton_i = function () {
		var t = new eui.Button();
		this.cancelAndOkGroupOkButton = t;
		t.horizontalCenter = 127;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 283;
		t.skinName = QPAlertUI$Skin3;
		return t;
	};
	_proto.okGroup_i = function () {
		var t = new eui.Group();
		this.okGroup = t;
		t.bottom = 25;
		t.height = 100;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 200;
		t.elementsContent = [this.okButton_i()];
		return t;
	};
	_proto.okButton_i = function () {
		var t = new eui.Button();
		this.okButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = QPAlertUI$Skin4;
		return t;
	};
	return QPAlertUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/QPLoadingUI.exml'] = window.QPLoadingUI = (function (_super) {
	__extends(QPLoadingUI, _super);
	function QPLoadingUI() {
		_super.call(this);
		this.skinParts = ["loadingAnimationGroup","circleImage","spadeImage","messageLabel","animationGroup"];
		
		this.currentState = "rotate";
		this.height = 1334;
		this.width = 750;
		this.loadingAnimationGroup_i();
		this.elementsContent = [this._Rect1_i(),this.animationGroup_i()];
		this.states = [
			new eui.State ("rotate",
				[
					new eui.SetProperty("circleImage","width",106),
					new eui.SetProperty("circleImage","height",108),
					new eui.SetProperty("circleImage","x",97),
					new eui.SetProperty("circleImage","y",71)
				])
		];
		
		eui.Binding.$bindProperties(this, ["circleImage"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [90],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [180],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [270],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [360],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, ["spadeImage"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [-1],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"scaleX");
	}
	var _proto = QPLoadingUI.prototype;

	_proto.loadingAnimationGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.loadingAnimationGroup = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.strokeAlpha = 0.3;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animationGroup_i = function () {
		var t = new eui.Group();
		this.animationGroup = t;
		t.height = 300;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 300;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.circleImage_i(),this.spadeImage_i(),this.messageLabel_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.circleImage_i = function () {
		var t = new eui.Image();
		this.circleImage = t;
		t.horizontalCenter = 0;
		t.source = "img_loading_circle@2x_png";
		t.verticalCenter = -25;
		return t;
	};
	_proto.spadeImage_i = function () {
		var t = new eui.Image();
		this.spadeImage = t;
		t.height = 44;
		t.horizontalCenter = 0;
		t.source = "img_loading_spade@2x_png";
		t.verticalCenter = -25;
		t.width = 43;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.Label();
		this.messageLabel = t;
		t.horizontalCenter = 0;
		t.text = "努力加载中...";
		t.textColor = 0xe5dfdf;
		t.verticalCenter = 66;
		return t;
	};
	return QPLoadingUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/QPToastUI.exml'] = window.QPToastUI = (function (_super) {
	__extends(QPToastUI, _super);
	function QPToastUI() {
		_super.call(this);
		this.skinParts = ["messageBackground","messageLabel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.messageBackground_i(),this.messageLabel_i()];
	}
	var _proto = QPToastUI.prototype;

	_proto.messageBackground_i = function () {
		var t = new eui.Rect();
		this.messageBackground = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.9;
		t.fillColor = 0x464646;
		t.height = 40;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0.9;
		t.verticalCenter = 0;
		t.width = 200;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.Label();
		this.messageLabel = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "连接网络中";
		t.verticalCenter = 0;
		return t;
	};
	return QPToastUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/GameLaunchProgressUI.exml'] = window.GameLaunchProgressUI = (function (_super) {
	__extends(GameLaunchProgressUI, _super);
	function GameLaunchProgressUI() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay","rocketImage"];
		
		this.height = 30;
		this.width = 599;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i(),this.rocketImage_i()];
	}
	var _proto = GameLaunchProgressUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_progress_bar@2x_png";
		t.verticalCenter = 0;
		t.width = 599;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "fg_progress_bar@2x_png";
		t.width = 599;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "99%";
		t.textColor = 0x8c3d11;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.rocketImage_i = function () {
		var t = new eui.Image();
		this.rocketImage = t;
		t.anchorOffsetX = 202;
		t.source = "img_rocket@2x_png";
		t.verticalCenter = 3;
		t.x = 0;
		return t;
	};
	return GameLaunchProgressUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/LaunchOnPureWebLayerUI.exml'] = window.LaunchOnPureWebLayerUI = (function (_super) {
	__extends(LaunchOnPureWebLayerUI, _super);
	var LaunchOnPureWebLayerUI$Skin5 = 	(function (_super) {
		__extends(LaunchOnPureWebLayerUI$Skin5, _super);
		function LaunchOnPureWebLayerUI$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LaunchOnPureWebLayerUI$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_log_in@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LaunchOnPureWebLayerUI$Skin5;
	})(eui.Skin);

	var LaunchOnPureWebLayerUI$Skin6 = 	(function (_super) {
		__extends(LaunchOnPureWebLayerUI$Skin6, _super);
		function LaunchOnPureWebLayerUI$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LaunchOnPureWebLayerUI$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_start@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LaunchOnPureWebLayerUI$Skin6;
	})(eui.Skin);

	function LaunchOnPureWebLayerUI() {
		_super.call(this);
		this.skinParts = ["signInButton","startButton"];
		
		this.height = 150;
		this.width = 500;
		this.elementsContent = [this.signInButton_i(),this.startButton_i()];
	}
	var _proto = LaunchOnPureWebLayerUI.prototype;

	_proto.signInButton_i = function () {
		var t = new eui.Button();
		this.signInButton = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = LaunchOnPureWebLayerUI$Skin5;
		return t;
	};
	_proto.startButton_i = function () {
		var t = new eui.Button();
		this.startButton = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = LaunchOnPureWebLayerUI$Skin6;
		return t;
	};
	return LaunchOnPureWebLayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/LaunchOnReactNativeLayerUI.exml'] = window.LaunchOnReactNativeLayerUI = (function (_super) {
	__extends(LaunchOnReactNativeLayerUI, _super);
	function LaunchOnReactNativeLayerUI() {
		_super.call(this);
		this.skinParts = ["descriptionLabel"];
		
		this.height = 150;
		this.width = 500;
		this.elementsContent = [this.descriptionLabel_i()];
	}
	var _proto = LaunchOnReactNativeLayerUI.prototype;

	_proto.descriptionLabel_i = function () {
		var t = new eui.Label();
		this.descriptionLabel = t;
		t.bottom = 0;
		t.fontFamily = "FangSong_GB2312";
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "正在查找房间...";
		t.textColor = 0xFFFFFF;
		return t;
	};
	return LaunchOnReactNativeLayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Toolbar/DDZPlayGameTopToolbarUI.exml'] = window.DDZPlayGameTopToolbarUI = (function (_super) {
	__extends(DDZPlayGameTopToolbarUI, _super);
	var DDZPlayGameTopToolbarUI$Skin7 = 	(function (_super) {
		__extends(DDZPlayGameTopToolbarUI$Skin7, _super);
		function DDZPlayGameTopToolbarUI$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZPlayGameTopToolbarUI$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_game@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZPlayGameTopToolbarUI$Skin7;
	})(eui.Skin);

	var DDZPlayGameTopToolbarUI$Skin8 = 	(function (_super) {
		__extends(DDZPlayGameTopToolbarUI$Skin8, _super);
		function DDZPlayGameTopToolbarUI$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZPlayGameTopToolbarUI$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_download_laiwan@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZPlayGameTopToolbarUI$Skin8;
	})(eui.Skin);

	function DDZPlayGameTopToolbarUI() {
		_super.call(this);
		this.skinParts = ["closeButton","downloadLaiwanButton"];
		
		this.height = 150;
		this.width = 400;
		this.elementsContent = [this.closeButton_i(),this.downloadLaiwanButton_i()];
	}
	var _proto = DDZPlayGameTopToolbarUI.prototype;

	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.label = "";
		t.visible = false;
		t.x = 308;
		t.y = 20;
		t.skinName = DDZPlayGameTopToolbarUI$Skin7;
		return t;
	};
	_proto.downloadLaiwanButton_i = function () {
		var t = new eui.Button();
		this.downloadLaiwanButton = t;
		t.label = "";
		t.visible = false;
		t.x = 203;
		t.y = 55;
		t.skinName = DDZPlayGameTopToolbarUI$Skin8;
		return t;
	};
	return DDZPlayGameTopToolbarUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/GameLaunchSceneUI.exml'] = window.GameLaunchSceneUI = (function (_super) {
	__extends(GameLaunchSceneUI, _super);
	function GameLaunchSceneUI() {
		_super.call(this);
		this.skinParts = ["progress","launchOnPureWebLayer","launchOnReactNativeLayer","topToolbar"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.progress_i(),this.launchOnPureWebLayer_i(),this.launchOnReactNativeLayer_i(),this.topToolbar_i()];
	}
	var _proto = GameLaunchSceneUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.right = 0;
		t.source = "bg_launch_game@2x_jpg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.progress_i = function () {
		var t = new QPProgressBar();
		this.progress = t;
		t.bottom = 131;
		t.horizontalCenter = 0;
		t.skinName = "GameLaunchProgressUI";
		return t;
	};
	_proto.launchOnPureWebLayer_i = function () {
		var t = new LaunchOnPureWebLayer();
		this.launchOnPureWebLayer = t;
		t.bottom = 240;
		t.horizontalCenter = 0;
		t.skinName = "LaunchOnPureWebLayerUI";
		return t;
	};
	_proto.launchOnReactNativeLayer_i = function () {
		var t = new LaunchOnReactNativeLayer();
		this.launchOnReactNativeLayer = t;
		t.bottom = 172;
		t.horizontalCenter = 0;
		t.skinName = "LaunchOnReactNativeLayerUI";
		return t;
	};
	_proto.topToolbar_i = function () {
		var t = new DDZPlayGameTopToolbar();
		this.topToolbar = t;
		t.right = 0;
		t.skinName = "DDZPlayGameTopToolbarUI";
		t.top = 0;
		t.visible = false;
		return t;
	};
	return GameLaunchSceneUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/GetVerificationCodeButtonUI.exml'] = window.GetVerificationCodeButtonUI = (function (_super) {
	__extends(GetVerificationCodeButtonUI, _super);
	function GetVerificationCodeButtonUI() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","btn_obtain@2x_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = GetVerificationCodeButtonUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "btn_obtain@2x_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x1fb6fb;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return GetVerificationCodeButtonUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/GetVerificationCodeTimerUI.exml'] = window.GetVerificationCodeTimerUI = (function (_super) {
	__extends(GetVerificationCodeTimerUI, _super);
	function GetVerificationCodeTimerUI() {
		_super.call(this);
		this.skinParts = ["timerLabel"];
		
		this.height = 50;
		this.width = 200;
		this.elementsContent = [this.timerLabel_i()];
	}
	var _proto = GetVerificationCodeTimerUI.prototype;

	_proto.timerLabel_i = function () {
		var t = new eui.Label();
		this.timerLabel = t;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "58秒后重新获取";
		t.textColor = 0xaaaaaa;
		t.verticalCenter = 0;
		return t;
	};
	return GetVerificationCodeTimerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/PhoneTextInputUI.exml'] = window.PhoneTextInputUI = (function (_super) {
	__extends(PhoneTextInputUI, _super);
	function PhoneTextInputUI() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = PhoneTextInputUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xdcdcdc;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 30;
		t.left = "10";
		t.right = "10";
		t.size = 28;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 30;
		t.left = 10;
		t.right = 10;
		t.size = 28;
		t.text = "";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return PhoneTextInputUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/InputPhoneUI.exml'] = window.InputPhoneUI = (function (_super) {
	__extends(InputPhoneUI, _super);
	var InputPhoneUI$Skin9 = 	(function (_super) {
		__extends(InputPhoneUI$Skin9, _super);
		function InputPhoneUI$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InputPhoneUI$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_next@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InputPhoneUI$Skin9;
	})(eui.Skin);

	function InputPhoneUI() {
		_super.call(this);
		this.skinParts = ["phoneInput","nextButton"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._DDZTransparentCover1_i(),this._Group2_i()];
	}
	var _proto = InputPhoneUI.prototype;

	_proto._DDZTransparentCover1_i = function () {
		var t = new DDZTransparentCover();
		t.skinName = "DDZTransparentCoverUI";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 360;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_phone_sign_in@2x_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this.phoneInput_i(),this.nextButton_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		t.horizontalAlign = "center";
		t.paddingBottom = 20;
		t.paddingTop = 20;
		t.verticalAlign = "contentJustify";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "获取验证码";
		t.textColor = 0x000000;
		t.x = -32;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "请输入您的手机号";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 480;
		t.x = -22;
		t.y = 10;
		return t;
	};
	_proto.phoneInput_i = function () {
		var t = new eui.TextInput();
		this.phoneInput = t;
		t.height = 68;
		t.skinName = "PhoneTextInputUI";
		t.width = 480;
		t.x = 119;
		t.y = 99;
		return t;
	};
	_proto.nextButton_i = function () {
		var t = new eui.Button();
		this.nextButton = t;
		t.label = "";
		t.x = 239;
		t.y = 267;
		t.skinName = InputPhoneUI$Skin9;
		return t;
	};
	return InputPhoneUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/VerificationCodeTextInputUI.exml'] = window.VerificationCodeTextInputUI = (function (_super) {
	__extends(VerificationCodeTextInputUI, _super);
	function VerificationCodeTextInputUI() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay","getVerificationCodeButton","timerView"];
		
		this.height = 68;
		this.minHeight = 40;
		this.minWidth = 300;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.textDisplay_i(),this.getVerificationCodeButton_i(),this.timerView_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",2,"getVerificationCodeButton")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",2,"getVerificationCodeButton")
				])
		];
	}
	var _proto = VerificationCodeTextInputUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xdcdcdc;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 30;
		t.left = "10";
		t.right = "10";
		t.size = 28;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 30;
		t.left = 10;
		t.right = 10;
		t.size = 28;
		t.text = "";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.getVerificationCodeButton_i = function () {
		var t = new eui.Button();
		this.getVerificationCodeButton = t;
		t.height = 46;
		t.label = "重新获取";
		t.right = 10;
		t.skinName = "GetVerificationCodeButtonUI";
		t.verticalCenter = 0;
		t.width = 114;
		return t;
	};
	_proto.timerView_i = function () {
		var t = new GetVerificationCodeTimerView();
		this.timerView = t;
		t.right = 10;
		t.skinName = "GetVerificationCodeTimerUI";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return VerificationCodeTextInputUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLaunch/View/InputVerificationCodeUI.exml'] = window.InputVerificationCodeUI = (function (_super) {
	__extends(InputVerificationCodeUI, _super);
	var InputVerificationCodeUI$Skin10 = 	(function (_super) {
		__extends(InputVerificationCodeUI$Skin10, _super);
		function InputVerificationCodeUI$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InputVerificationCodeUI$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_ok@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InputVerificationCodeUI$Skin10;
	})(eui.Skin);

	function InputVerificationCodeUI() {
		_super.call(this);
		this.skinParts = ["descriptionLabel","verificationCodeInput","okButton"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._DDZTransparentCover1_i(),this._Group3_i()];
	}
	var _proto = InputVerificationCodeUI.prototype;

	_proto._DDZTransparentCover1_i = function () {
		var t = new DDZTransparentCover();
		t.horizontalCenter = 0;
		t.skinName = "DDZTransparentCoverUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 406;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bg_phone_sign_in@2x_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Label1_i(),this._Group1_i(),this.verificationCodeInput_i(),this.okButton_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		t.horizontalAlign = "center";
		t.paddingBottom = 20;
		t.paddingTop = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 36;
		t.text = "验证码已发送";
		t.textColor = 0x000000;
		t.x = 250;
		t.y = 63;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 480;
		t.x = 164;
		t.y = 121;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.descriptionLabel_i(),this._Label2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	_proto.descriptionLabel_i = function () {
		var t = new eui.Label();
		this.descriptionLabel = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "已发送到：13111111111";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 480;
		t.x = 0;
		t.y = 110;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "请输入您收到的验证码";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 480;
		t.x = 0;
		t.y = 110;
		return t;
	};
	_proto.verificationCodeInput_i = function () {
		var t = new VerificationCodeTextInput();
		this.verificationCodeInput = t;
		t.height = 68;
		t.skinName = "VerificationCodeTextInputUI";
		t.width = 480;
		t.x = 67;
		t.y = 215;
		return t;
	};
	_proto.okButton_i = function () {
		var t = new eui.Button();
		this.okButton = t;
		t.label = "";
		t.x = 237;
		t.y = 259;
		t.skinName = InputVerificationCodeUI$Skin10;
		return t;
	};
	return InputVerificationCodeUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Buttons/DDZCallLandlordButtonsUI.exml'] = window.DDZCallLandlordButtonsUI = (function (_super) {
	__extends(DDZCallLandlordButtonsUI, _super);
	var DDZCallLandlordButtonsUI$Skin11 = 	(function (_super) {
		__extends(DDZCallLandlordButtonsUI$Skin11, _super);
		function DDZCallLandlordButtonsUI$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_not_call_landlord_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZCallLandlordButtonsUI$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_not_call_landlord@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZCallLandlordButtonsUI$Skin11;
	})(eui.Skin);

	var DDZCallLandlordButtonsUI$Skin12 = 	(function (_super) {
		__extends(DDZCallLandlordButtonsUI$Skin12, _super);
		function DDZCallLandlordButtonsUI$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_call_landlord_1_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_call_landlord_1_disable@2x_png")
					])
			];
		}
		var _proto = DDZCallLandlordButtonsUI$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_call_landlord_1@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZCallLandlordButtonsUI$Skin12;
	})(eui.Skin);

	var DDZCallLandlordButtonsUI$Skin13 = 	(function (_super) {
		__extends(DDZCallLandlordButtonsUI$Skin13, _super);
		function DDZCallLandlordButtonsUI$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_call_landlord_2_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_call_landlord_2_disable@2x_png")
					])
			];
		}
		var _proto = DDZCallLandlordButtonsUI$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_call_landlord_2@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZCallLandlordButtonsUI$Skin13;
	})(eui.Skin);

	var DDZCallLandlordButtonsUI$Skin14 = 	(function (_super) {
		__extends(DDZCallLandlordButtonsUI$Skin14, _super);
		function DDZCallLandlordButtonsUI$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_call_landlord_3_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_call_landlord_3_disable@2x_png")
					])
			];
		}
		var _proto = DDZCallLandlordButtonsUI$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_call_landlord_3@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZCallLandlordButtonsUI$Skin14;
	})(eui.Skin);

	function DDZCallLandlordButtonsUI() {
		_super.call(this);
		this.skinParts = ["buJiaoButton","callOnePointButton","callTwoPointButton","callThreePointButton"];
		
		this.height = 104;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DDZCallLandlordButtonsUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.buJiaoButton_i(),this.callOnePointButton_i(),this.callTwoPointButton_i(),this.callThreePointButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.buJiaoButton_i = function () {
		var t = new eui.Button();
		this.buJiaoButton = t;
		t.label = "";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 10;
		t.skinName = DDZCallLandlordButtonsUI$Skin11;
		return t;
	};
	_proto.callOnePointButton_i = function () {
		var t = new eui.Button();
		this.callOnePointButton = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 190;
		t.y = 10;
		t.skinName = DDZCallLandlordButtonsUI$Skin12;
		return t;
	};
	_proto.callTwoPointButton_i = function () {
		var t = new eui.Button();
		this.callTwoPointButton = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 200;
		t.y = 20;
		t.skinName = DDZCallLandlordButtonsUI$Skin13;
		return t;
	};
	_proto.callThreePointButton_i = function () {
		var t = new eui.Button();
		this.callThreePointButton = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 210;
		t.y = 30;
		t.skinName = DDZCallLandlordButtonsUI$Skin14;
		return t;
	};
	return DDZCallLandlordButtonsUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Buttons/DDZMustPlayCardButtons.exml'] = window.DDZMustPlayCardButtonsUI = (function (_super) {
	__extends(DDZMustPlayCardButtonsUI, _super);
	var DDZMustPlayCardButtonsUI$Skin15 = 	(function (_super) {
		__extends(DDZMustPlayCardButtonsUI$Skin15, _super);
		function DDZMustPlayCardButtonsUI$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_hint_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZMustPlayCardButtonsUI$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_hint@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZMustPlayCardButtonsUI$Skin15;
	})(eui.Skin);

	var DDZMustPlayCardButtonsUI$Skin16 = 	(function (_super) {
		__extends(DDZMustPlayCardButtonsUI$Skin16, _super);
		function DDZMustPlayCardButtonsUI$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_play_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_play_disable@2x_png")
					])
			];
		}
		var _proto = DDZMustPlayCardButtonsUI$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_play@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZMustPlayCardButtonsUI$Skin16;
	})(eui.Skin);

	function DDZMustPlayCardButtonsUI() {
		_super.call(this);
		this.skinParts = ["hintButton","playButton","buttonsGroup"];
		
		this.height = 104;
		this.width = 750;
		this.elementsContent = [this.buttonsGroup_i()];
	}
	var _proto = DDZMustPlayCardButtonsUI.prototype;

	_proto.buttonsGroup_i = function () {
		var t = new eui.Group();
		this.buttonsGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.hintButton_i(),this.playButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.hintButton_i = function () {
		var t = new eui.Button();
		this.hintButton = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 329;
		t.skinName = DDZMustPlayCardButtonsUI$Skin15;
		return t;
	};
	_proto.playButton_i = function () {
		var t = new eui.Button();
		this.playButton = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 711;
		t.skinName = DDZMustPlayCardButtonsUI$Skin16;
		return t;
	};
	return DDZMustPlayCardButtonsUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Buttons/DDZNoBiggerCardsButtonsUI.exml'] = window.DDZNoBiggerCardsButtonsUI = (function (_super) {
	__extends(DDZNoBiggerCardsButtonsUI, _super);
	var DDZNoBiggerCardsButtonsUI$Skin17 = 	(function (_super) {
		__extends(DDZNoBiggerCardsButtonsUI$Skin17, _super);
		function DDZNoBiggerCardsButtonsUI$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yao_bu_qi_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZNoBiggerCardsButtonsUI$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yao_bu_qi@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZNoBiggerCardsButtonsUI$Skin17;
	})(eui.Skin);

	function DDZNoBiggerCardsButtonsUI() {
		_super.call(this);
		this.skinParts = ["noBiggerCardsButton","buttonsGroup"];
		
		this.height = 104;
		this.width = 980;
		this.elementsContent = [this.buttonsGroup_i()];
	}
	var _proto = DDZNoBiggerCardsButtonsUI.prototype;

	_proto.buttonsGroup_i = function () {
		var t = new eui.Group();
		this.buttonsGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.noBiggerCardsButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.noBiggerCardsButton_i = function () {
		var t = new eui.Button();
		this.noBiggerCardsButton = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 34;
		t.skinName = DDZNoBiggerCardsButtonsUI$Skin17;
		return t;
	};
	return DDZNoBiggerCardsButtonsUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Buttons/DDZPlayCardButtonsUI.exml'] = window.DDZPlayCardButtonsUI = (function (_super) {
	__extends(DDZPlayCardButtonsUI, _super);
	var DDZPlayCardButtonsUI$Skin18 = 	(function (_super) {
		__extends(DDZPlayCardButtonsUI$Skin18, _super);
		function DDZPlayCardButtonsUI$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_not_play_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZPlayCardButtonsUI$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_not_play@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZPlayCardButtonsUI$Skin18;
	})(eui.Skin);

	var DDZPlayCardButtonsUI$Skin19 = 	(function (_super) {
		__extends(DDZPlayCardButtonsUI$Skin19, _super);
		function DDZPlayCardButtonsUI$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_hint_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZPlayCardButtonsUI$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_hint@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZPlayCardButtonsUI$Skin19;
	})(eui.Skin);

	var DDZPlayCardButtonsUI$Skin20 = 	(function (_super) {
		__extends(DDZPlayCardButtonsUI$Skin20, _super);
		function DDZPlayCardButtonsUI$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_play_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_play_disable@2x_png")
					])
			];
		}
		var _proto = DDZPlayCardButtonsUI$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_play@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZPlayCardButtonsUI$Skin20;
	})(eui.Skin);

	function DDZPlayCardButtonsUI() {
		_super.call(this);
		this.skinParts = ["notPlayButton","hintButton","playButton","buttonsGroup"];
		
		this.height = 104;
		this.width = 980;
		this.elementsContent = [this.buttonsGroup_i()];
	}
	var _proto = DDZPlayCardButtonsUI.prototype;

	_proto.buttonsGroup_i = function () {
		var t = new eui.Group();
		this.buttonsGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.notPlayButton_i(),this.hintButton_i(),this.playButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.notPlayButton_i = function () {
		var t = new eui.Button();
		this.notPlayButton = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 34;
		t.y = 10;
		t.skinName = DDZPlayCardButtonsUI$Skin18;
		return t;
	};
	_proto.hintButton_i = function () {
		var t = new eui.Button();
		this.hintButton = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 34;
		t.skinName = DDZPlayCardButtonsUI$Skin19;
		return t;
	};
	_proto.playButton_i = function () {
		var t = new eui.Button();
		this.playButton = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 34;
		t.skinName = DDZPlayCardButtonsUI$Skin20;
		return t;
	};
	return DDZPlayCardButtonsUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Buttons/DDZPlayGameButtonsContainerUI.exml'] = window.DDZPlayGameButtonsContainerUI = (function (_super) {
	__extends(DDZPlayGameButtonsContainerUI, _super);
	var DDZPlayGameButtonsContainerUI$Skin21 = 	(function (_super) {
		__extends(DDZPlayGameButtonsContainerUI$Skin21, _super);
		function DDZPlayGameButtonsContainerUI$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_start_game_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZPlayGameButtonsContainerUI$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_start_game@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZPlayGameButtonsContainerUI$Skin21;
	})(eui.Skin);

	function DDZPlayGameButtonsContainerUI() {
		_super.call(this);
		this.skinParts = ["callLandlordButtons","playCardButtons","mustPlayCardButtons","noBiggerCardsButtons","startGameButton"];
		
		this.height = 104;
		this.width = 750;
		this.elementsContent = [this.callLandlordButtons_i(),this.playCardButtons_i(),this.mustPlayCardButtons_i(),this.noBiggerCardsButtons_i(),this.startGameButton_i()];
	}
	var _proto = DDZPlayGameButtonsContainerUI.prototype;

	_proto.callLandlordButtons_i = function () {
		var t = new DDZCallLandlordButtons();
		this.callLandlordButtons = t;
		t.horizontalCenter = 0;
		t.skinName = "DDZCallLandlordButtonsUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto.playCardButtons_i = function () {
		var t = new DDZPlayCardButtons();
		this.playCardButtons = t;
		t.horizontalCenter = 0;
		t.skinName = "DDZPlayCardButtonsUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mustPlayCardButtons_i = function () {
		var t = new DDZMustPlayCardButtons();
		this.mustPlayCardButtons = t;
		t.horizontalCenter = 0;
		t.skinName = "DDZMustPlayCardButtonsUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto.noBiggerCardsButtons_i = function () {
		var t = new DDZNoBiggerCardsButtons();
		this.noBiggerCardsButtons = t;
		t.horizontalCenter = 0;
		t.skinName = "DDZNoBiggerCardsButtonsUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto.startGameButton_i = function () {
		var t = new eui.Button();
		this.startGameButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = DDZPlayGameButtonsContainerUI$Skin21;
		return t;
	};
	return DDZPlayGameButtonsContainerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Card/DDZCardListUI.exml'] = window.DDZCardListUI = (function (_super) {
	__extends(DDZCardListUI, _super);
	function DDZCardListUI() {
		_super.call(this);
		this.skinParts = ["cardList"];
		
		this.height = 110;
		this.width = 400;
		this.elementsContent = [this.cardList_i()];
	}
	var _proto = DDZCardListUI.prototype;

	_proto.cardList_i = function () {
		var t = new eui.List();
		this.cardList = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = -40;
		t.orientation = "rows";
		t.verticalAlign = "middle";
		t.verticalGap = 0;
		return t;
	};
	return DDZCardListUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Card/DDZCardUI.exml'] = window.DDZCardUI = (function (_super) {
	__extends(DDZCardUI, _super);
	function DDZCardUI() {
		_super.call(this);
		this.skinParts = ["image","landlordSignImage","contentGroup"];
		
		this.height = 182;
		this.width = 126;
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = DDZCardUI.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this.image_i(),this.landlordSignImage_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "poker_2s@2x_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.landlordSignImage_i = function () {
		var t = new eui.Image();
		this.landlordSignImage = t;
		t.percentHeight = 50;
		t.right = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_hand_card_landlord_sign@2x_png";
		t.top = 3;
		t.percentWidth = 75;
		return t;
	};
	return DDZCardUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Card/DDZLandlordCardsUI.exml'] = window.DDZLandlordCardsUI = (function (_super) {
	__extends(DDZLandlordCardsUI, _super);
	function DDZLandlordCardsUI() {
		_super.call(this);
		this.skinParts = ["cardOne","cardTwo","cardThree"];
		
		this.height = 100;
		this.width = 238;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DDZLandlordCardsUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.cardOne_i(),this.cardTwo_i(),this.cardThree_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.paddingTop = 5;
		t.verticalAlign = "top";
		return t;
	};
	_proto.cardOne_i = function () {
		var t = new DDZCardView();
		this.cardOne = t;
		t.height = 91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZCardUI";
		t.width = 63;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.cardTwo_i = function () {
		var t = new DDZCardView();
		this.cardTwo = t;
		t.height = 91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZCardUI";
		t.width = 63;
		t.x = 78.5;
		t.y = 12;
		return t;
	};
	_proto.cardThree_i = function () {
		var t = new DDZCardView();
		this.cardThree = t;
		t.height = 91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZCardUI";
		t.width = 63;
		t.x = 157;
		t.y = 12;
		return t;
	};
	return DDZLandlordCardsUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Card/DDZPlayedCardUI.exml'] = window.DDZPlayedCardUI = (function (_super) {
	__extends(DDZPlayedCardUI, _super);
	function DDZPlayedCardUI() {
		_super.call(this);
		this.skinParts = ["image","landlordSignImage"];
		
		this.height = 112;
		this.width = 80;
		this.elementsContent = [this.image_i(),this.landlordSignImage_i()];
	}
	var _proto = DDZPlayedCardUI.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "poker_2h@2x_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.landlordSignImage_i = function () {
		var t = new eui.Image();
		this.landlordSignImage = t;
		t.percentHeight = 45;
		t.right = 1;
		t.source = "img_played_card_landlord_sign@2x_png";
		t.top = 2;
		t.percentWidth = 65;
		return t;
	};
	return DDZPlayedCardUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Card/DDZRearCardUI.exml'] = window.DDZRearCardUI = (function (_super) {
	__extends(DDZRearCardUI, _super);
	function DDZRearCardUI() {
		_super.call(this);
		this.skinParts = ["image"];
		
		this.height = 140;
		this.width = 105;
		this.elementsContent = [this.image_i()];
	}
	var _proto = DDZRearCardUI.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 100;
		t.source = "poker_back@2x_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return DDZRearCardUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/DDZClockUI.exml'] = window.DDZClockUI = (function (_super) {
	__extends(DDZClockUI, _super);
	function DDZClockUI() {
		_super.call(this);
		this.skinParts = ["stopwatchLabel"];
		
		this.height = 101;
		this.width = 81;
		this.elementsContent = [this._Image1_i(),this.stopwatchLabel_i()];
	}
	var _proto = DDZClockUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(10,10,45,35);
		t.source = "img_room_timer@2x_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.stopwatchLabel_i = function () {
		var t = new eui.Label();
		this.stopwatchLabel = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "25";
		t.textColor = 0xfb5a5a;
		t.verticalCenter = -9.5;
		return t;
	};
	return DDZClockUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/DDZGameOverUI.exml'] = window.DDZGameOverUI = (function (_super) {
	__extends(DDZGameOverUI, _super);
	var DDZGameOverUI$Skin22 = 	(function (_super) {
		__extends(DDZGameOverUI$Skin22, _super);
		function DDZGameOverUI$Skin22() {
			_super.call(this);
			this.skinParts = ["img","labelDisplay"];
			
			this.elementsContent = [this.img_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("img","percentWidth",90),
						new eui.SetProperty("img","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZGameOverUI$Skin22.prototype;

		_proto.img_i = function () {
			var t = new eui.Image();
			this.img = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_winner_continue_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGameOverUI$Skin22;
	})(eui.Skin);

	var DDZGameOverUI$Skin23 = 	(function (_super) {
		__extends(DDZGameOverUI$Skin23, _super);
		function DDZGameOverUI$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZGameOverUI$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_game_over_download_laiwan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGameOverUI$Skin23;
	})(eui.Skin);

	function DDZGameOverUI() {
		_super.call(this);
		this.skinParts = ["continueButton","downloadLaiwanButton","resultImage","leftPlayerScoreLabel","rightPlayerScoreLabel","bottomPlayerScoreLabel","topToolbar"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.continueButton_i(),this.downloadLaiwanButton_i(),this.resultImage_i(),this.leftPlayerScoreLabel_i(),this.rightPlayerScoreLabel_i(),this.bottomPlayerScoreLabel_i(),this.topToolbar_i()];
	}
	var _proto = DDZGameOverUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.strokeAlpha = 0.4;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.continueButton_i = function () {
		var t = new eui.Button();
		this.continueButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 52;
		t.skinName = DDZGameOverUI$Skin22;
		return t;
	};
	_proto.downloadLaiwanButton_i = function () {
		var t = new eui.Button();
		this.downloadLaiwanButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 197;
		t.skinName = DDZGameOverUI$Skin23;
		return t;
	};
	_proto.resultImage_i = function () {
		var t = new eui.Image();
		this.resultImage = t;
		t.height = 277;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "image_winner_png";
		t.verticalCenter = -194.5;
		t.width = 414;
		return t;
	};
	_proto.leftPlayerScoreLabel_i = function () {
		var t = new eui.Label();
		this.leftPlayerScoreLabel = t;
		t.bold = true;
		t.left = 200;
		t.size = 40;
		t.text = "";
		t.top = 240;
		return t;
	};
	_proto.rightPlayerScoreLabel_i = function () {
		var t = new eui.Label();
		this.rightPlayerScoreLabel = t;
		t.bold = true;
		t.right = 242;
		t.size = 40;
		t.text = "";
		t.top = 240;
		return t;
	};
	_proto.bottomPlayerScoreLabel_i = function () {
		var t = new eui.Label();
		this.bottomPlayerScoreLabel = t;
		t.bold = true;
		t.bottom = 180;
		t.left = 200;
		t.size = 40;
		t.text = "";
		return t;
	};
	_proto.topToolbar_i = function () {
		var t = new DDZPlayGameTopToolbar();
		this.topToolbar = t;
		t.right = 0;
		t.skinName = "DDZPlayGameTopToolbarUI";
		t.top = 0;
		return t;
	};
	return DDZGameOverUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/DDZPlayGameMatchPlayerUI.exml'] = window.DDZPlayGameMatchPlayerUI = (function (_super) {
	__extends(DDZPlayGameMatchPlayerUI, _super);
	function DDZPlayGameMatchPlayerUI() {
		_super.call(this);
		this.skinParts = ["informationImage"];
		
		this.height = 50;
		this.width = 281;
		this.elementsContent = [this.informationImage_i()];
	}
	var _proto = DDZPlayGameMatchPlayerUI.prototype;

	_proto.informationImage_i = function () {
		var t = new eui.Image();
		this.informationImage = t;
		t.left = 0;
		t.source = "img_matching_player_png";
		t.verticalCenter = 0;
		return t;
	};
	return DDZPlayGameMatchPlayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZPlayerUI.exml'] = window.DDZPlayerUI = (function (_super) {
	__extends(DDZPlayerUI, _super);
	function DDZPlayerUI() {
		_super.call(this);
		this.skinParts = ["avatarImg","landlordHatImage","avatarGroup","nameLabel","scoreLabel"];
		
		this.height = 200;
		this.width = 170;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DDZPlayerUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.avatarGroup_i(),this.nameLabel_i(),this.scoreLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 7;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto.avatarGroup_i = function () {
		var t = new eui.Group();
		this.avatarGroup = t;
		t.height = 118;
		t.width = 118;
		t.x = 23;
		t.y = 8;
		t.elementsContent = [this.avatarImg_i(),this.landlordHatImage_i()];
		return t;
	};
	_proto.avatarImg_i = function () {
		var t = new eui.Image();
		this.avatarImg = t;
		t.height = 118;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_game_default_avatar@2x_png";
		t.top = 0;
		t.touchEnabled = true;
		t.width = 118;
		t.x = 0;
		t.y = 125;
		return t;
	};
	_proto.landlordHatImage_i = function () {
		var t = new eui.Image();
		this.landlordHatImage = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_room_hat@2x_png";
		t.top = -32;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.height = 26;
		t.horizontalCenter = 0;
		t.multiline = false;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "...";
		t.textAlign = "center";
		t.percentWidth = 100;
		t.wordWrap = false;
		t.x = 43;
		t.y = 125;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.height = 26;
		t.horizontalCenter = 0;
		t.multiline = false;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "积分：1122";
		t.textAlign = "center";
		t.visible = false;
		t.percentWidth = 100;
		t.wordWrap = false;
		t.x = 43;
		t.y = 125;
		return t;
	};
	return DDZPlayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZPlayerStateUI.exml'] = window.DDZPlayerStateUI = (function (_super) {
	__extends(DDZPlayerStateUI, _super);
	function DDZPlayerStateUI() {
		_super.call(this);
		this.skinParts = ["notAddTimesImg","notCallLandlordImg","notPlayImg","addTimesImg","callOnePointImage","callTwoPointImage","callThreePointImage","waitForReady"];
		
		this.height = 52;
		this.width = 130;
		this.elementsContent = [this.notAddTimesImg_i(),this.notCallLandlordImg_i(),this.notPlayImg_i(),this.addTimesImg_i(),this.callOnePointImage_i(),this.callTwoPointImage_i(),this.callThreePointImage_i(),this.waitForReady_i()];
	}
	var _proto = DDZPlayerStateUI.prototype;

	_proto.notAddTimesImg_i = function () {
		var t = new eui.Image();
		this.notAddTimesImg = t;
		t.height = 43;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_not_add_times@2x_png";
		t.width = 128;
		t.y = 5;
		return t;
	};
	_proto.notCallLandlordImg_i = function () {
		var t = new eui.Image();
		this.notCallLandlordImg = t;
		t.height = 43;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_not_call_landlord@2x_png";
		t.width = 84;
		t.y = 5;
		return t;
	};
	_proto.notPlayImg_i = function () {
		var t = new eui.Image();
		this.notPlayImg = t;
		t.height = 43;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_not_play@2x_png";
		t.width = 84;
		t.y = 5;
		return t;
	};
	_proto.addTimesImg_i = function () {
		var t = new eui.Image();
		this.addTimesImg = t;
		t.height = 42;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_add_times@2x_png";
		t.width = 83;
		t.y = 5;
		return t;
	};
	_proto.callOnePointImage_i = function () {
		var t = new eui.Image();
		this.callOnePointImage = t;
		t.height = 47;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_one_point@2x_png";
		t.width = 73;
		t.y = 5;
		return t;
	};
	_proto.callTwoPointImage_i = function () {
		var t = new eui.Image();
		this.callTwoPointImage = t;
		t.height = 47;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_two_point@2x_png";
		t.width = 73;
		t.y = 5;
		return t;
	};
	_proto.callThreePointImage_i = function () {
		var t = new eui.Image();
		this.callThreePointImage = t;
		t.height = 47;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_three_point@2x_png";
		t.width = 73;
		t.y = 5;
		return t;
	};
	_proto.waitForReady_i = function () {
		var t = new eui.Label();
		this.waitForReady = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "等待准备";
		t.textColor = 0xf7c967;
		t.verticalCenter = 0;
		return t;
	};
	return DDZPlayerStateUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZPlayerRemainCardUI.exml'] = window.DDZPlayerRemainCardUI = (function (_super) {
	__extends(DDZPlayerRemainCardUI, _super);
	function DDZPlayerRemainCardUI() {
		_super.call(this);
		this.skinParts = ["amountLabel","amountLabelGroup"];
		
		this.height = 58;
		this.width = 48;
		this.elementsContent = [this._Image1_i(),this.amountLabelGroup_i()];
	}
	var _proto = DDZPlayerRemainCardUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "poker_back@2x_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.amountLabelGroup_i = function () {
		var t = new eui.Group();
		this.amountLabelGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.amountLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.amountLabel_i = function () {
		var t = new eui.Label();
		this.amountLabel = t;
		t.backgroundColor = 0x0a0606;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.stroke = 1;
		t.strokeColor = 0x414660;
		t.text = "25";
		t.textColor = 0xfcf2e8;
		t.x = 6;
		t.y = 13;
		return t;
	};
	return DDZPlayerRemainCardUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZWarningLightUI.exml'] = window.DDZWarningLightUI = (function (_super) {
	__extends(DDZWarningLightUI, _super);
	function DDZWarningLightUI() {
		_super.call(this);
		this.skinParts = ["contentGroup"];
		
		this.height = 100;
		this.width = 168;
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = DDZWarningLightUI.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	return DDZWarningLightUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZLeftPlayerGameInfoUI.exml'] = window.DDZLeftPlayerGameInfoUI = (function (_super) {
	__extends(DDZLeftPlayerGameInfoUI, _super);
	function DDZLeftPlayerGameInfoUI() {
		_super.call(this);
		this.skinParts = ["playerStateView","remainCardView","warningLightView"];
		
		this.height = 150;
		this.width = 150;
		this.elementsContent = [this.playerStateView_i(),this.remainCardView_i(),this.warningLightView_i()];
	}
	var _proto = DDZLeftPlayerGameInfoUI.prototype;

	_proto.playerStateView_i = function () {
		var t = new DDZPlayerStateView();
		this.playerStateView = t;
		t.bottom = 73;
		t.left = 0;
		t.skinName = "DDZPlayerStateUI";
		return t;
	};
	_proto.remainCardView_i = function () {
		var t = new DDZPlayerRemainCardView();
		this.remainCardView = t;
		t.bottom = 3;
		t.left = 0;
		t.skinName = "DDZPlayerRemainCardUI";
		return t;
	};
	_proto.warningLightView_i = function () {
		var t = new DDZWarningLightView();
		this.warningLightView = t;
		t.right = -32;
		t.skinName = "DDZWarningLightUI";
		t.verticalCenter = 42;
		return t;
	};
	return DDZLeftPlayerGameInfoUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZRightPlayerGameInfoUI.exml'] = window.DDZRightPlayerGameInfoUI = (function (_super) {
	__extends(DDZRightPlayerGameInfoUI, _super);
	function DDZRightPlayerGameInfoUI() {
		_super.call(this);
		this.skinParts = ["playerStateView","remainCardView","warningLightView"];
		
		this.height = 150;
		this.width = 150;
		this.elementsContent = [this.playerStateView_i(),this.remainCardView_i(),this.warningLightView_i()];
	}
	var _proto = DDZRightPlayerGameInfoUI.prototype;

	_proto.playerStateView_i = function () {
		var t = new DDZPlayerStateView();
		this.playerStateView = t;
		t.bottom = 73;
		t.right = 0;
		t.skinName = "DDZPlayerStateUI";
		return t;
	};
	_proto.remainCardView_i = function () {
		var t = new DDZPlayerRemainCardView();
		this.remainCardView = t;
		t.bottom = 3;
		t.right = 0;
		t.skinName = "DDZPlayerRemainCardUI";
		return t;
	};
	_proto.warningLightView_i = function () {
		var t = new DDZWarningLightView();
		this.warningLightView = t;
		t.left = -32;
		t.skinName = "DDZWarningLightUI";
		t.verticalCenter = 42;
		return t;
	};
	return DDZRightPlayerGameInfoUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZActivePlayerSignUI.exml'] = window.DDZActivePlayerSignUI = (function (_super) {
	__extends(DDZActivePlayerSignUI, _super);
	function DDZActivePlayerSignUI() {
		_super.call(this);
		this.skinParts = ["leftPlayerSign","rightPlayerSign","bottomPlayerSign"];
		
		this.height = 688;
		this.width = 690;
		this.elementsContent = [this.leftPlayerSign_i(),this.rightPlayerSign_i(),this.bottomPlayerSign_i()];
	}
	var _proto = DDZActivePlayerSignUI.prototype;

	_proto.leftPlayerSign_i = function () {
		var t = new eui.Image();
		this.leftPlayerSign = t;
		t.anchorOffsetX = 345;
		t.anchorOffsetY = 344;
		t.rotation = 10;
		t.source = "img_active_player_sign@2x_png";
		t.touchEnabled = false;
		t.x = 345;
		t.y = 348;
		return t;
	};
	_proto.rightPlayerSign_i = function () {
		var t = new eui.Image();
		this.rightPlayerSign = t;
		t.anchorOffsetX = 345;
		t.anchorOffsetY = 344;
		t.rotation = 10;
		t.source = "img_active_player_sign@2x_png";
		t.touchEnabled = false;
		t.x = 345;
		t.y = 348;
		return t;
	};
	_proto.bottomPlayerSign_i = function () {
		var t = new eui.Image();
		this.bottomPlayerSign = t;
		t.anchorOffsetX = 345;
		t.anchorOffsetY = 344;
		t.rotation = 10;
		t.source = "img_active_player_sign@2x_png";
		t.touchEnabled = false;
		t.x = 345;
		t.y = 348;
		return t;
	};
	return DDZActivePlayerSignUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZBottomPlayerHandCardsUI.exml'] = window.DDZBottomPlayerHandCardsUI = (function (_super) {
	__extends(DDZBottomPlayerHandCardsUI, _super);
	function DDZBottomPlayerHandCardsUI() {
		_super.call(this);
		this.skinParts = ["rearCardListView","rearCardsGroup","topHandCardListView","bottomHandCardListView","handCardsGroup","rearCardView","bottomCardsGroup"];
		
		this.height = 570;
		this.width = 750;
		this.elementsContent = [this.rearCardsGroup_i(),this.handCardsGroup_i(),this.rearCardView_i(),this.bottomCardsGroup_i()];
	}
	var _proto = DDZBottomPlayerHandCardsUI.prototype;

	_proto.rearCardsGroup_i = function () {
		var t = new eui.Group();
		this.rearCardsGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.rearCardListView_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.rearCardListView_i = function () {
		var t = new DDZRearCardListView();
		this.rearCardListView = t;
		t.height = 150;
		t.skinName = "DDZCardListUI";
		t.width = 750;
		t.x = 145;
		t.y = 81;
		return t;
	};
	_proto.handCardsGroup_i = function () {
		var t = new eui.Group();
		this.handCardsGroup = t;
		t.bottom = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.topHandCardListView_i(),this.bottomHandCardListView_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -60;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto.topHandCardListView_i = function () {
		var t = new DDZHandCardListView();
		this.topHandCardListView = t;
		t.height = 177;
		t.skinName = "DDZCardListUI";
		t.touchEnabled = false;
		t.width = 750;
		t.x = 444;
		t.y = 59;
		return t;
	};
	_proto.bottomHandCardListView_i = function () {
		var t = new DDZHandCardListView();
		this.bottomHandCardListView = t;
		t.height = 177;
		t.skinName = "DDZCardListUI";
		t.touchEnabled = false;
		t.width = 750;
		t.x = 0;
		t.y = 123;
		return t;
	};
	_proto.rearCardView_i = function () {
		var t = new DDZRearCardView();
		this.rearCardView = t;
		t.height = 140;
		t.skinName = "DDZRearCardUI";
		t.visible = false;
		t.width = 105;
		t.x = 323;
		t.y = 0;
		return t;
	};
	_proto.bottomCardsGroup_i = function () {
		var t = new eui.Group();
		this.bottomCardsGroup = t;
		t.anchorOffsetX = 250;
		t.anchorOffsetY = 70;
		t.height = 141;
		t.horizontalCenter = 0;
		t.top = -132;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 500;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._DDZRearCardView1_i(),this._DDZRearCardView2_i(),this._DDZRearCardView3_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._DDZRearCardView1_i = function () {
		var t = new DDZRearCardView();
		t.height = 140;
		t.skinName = "DDZRearCardUI";
		t.width = 105;
		t.x = 99;
		t.y = 57;
		return t;
	};
	_proto._DDZRearCardView2_i = function () {
		var t = new DDZRearCardView();
		t.height = 140;
		t.skinName = "DDZRearCardUI";
		t.width = 105;
		t.x = 109;
		t.y = 67;
		return t;
	};
	_proto._DDZRearCardView3_i = function () {
		var t = new DDZRearCardView();
		t.height = 140;
		t.skinName = "DDZRearCardUI";
		t.width = 105;
		t.x = 119;
		t.y = 77;
		return t;
	};
	return DDZBottomPlayerHandCardsUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Debug/DDZPlayGameDebugWindow2UI.exml'] = window.DDZPlayGameDebugWindow2UI = (function (_super) {
	__extends(DDZPlayGameDebugWindow2UI, _super);
	function DDZPlayGameDebugWindow2UI() {
		_super.call(this);
		this.skinParts = ["roomIdLabel","serverLabel","gameMatchIdLabel","appVersionLabel","contentGroup","contentScroller"];
		
		this.height = 120;
		this.width = 520;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.contentScroller_i()];
	}
	var _proto = DDZPlayGameDebugWindow2UI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.strokeAlpha = 0.4;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.roomIdLabel_i(),this.serverLabel_i(),this.gameMatchIdLabel_i(),this.appVersionLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.roomIdLabel_i = function () {
		var t = new eui.Label();
		this.roomIdLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "09qwje9r9wr";
		t.x = 241;
		t.y = 30;
		return t;
	};
	_proto.serverLabel_i = function () {
		var t = new eui.Label();
		this.serverLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "192.111.222.333";
		t.x = 251;
		t.y = 40;
		return t;
	};
	_proto.gameMatchIdLabel_i = function () {
		var t = new eui.Label();
		this.gameMatchIdLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "游戏id：xxxxx";
		t.x = 261;
		t.y = 50;
		return t;
	};
	_proto.appVersionLabel_i = function () {
		var t = new eui.Label();
		this.appVersionLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "2.0.0";
		t.x = 271;
		t.y = 60;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.height = 10;
		t.width = 10;
		t.x = 353;
		t.y = 3;
		t.viewport = this.contentGroup_i();
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		return t;
	};
	return DDZPlayGameDebugWindow2UI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/DDZPlayGameSceneUI.exml'] = window.DDZPlayGameSceneUI = (function (_super) {
	__extends(DDZPlayGameSceneUI, _super);
	function DDZPlayGameSceneUI() {
		_super.call(this);
		this.skinParts = ["leftCardsAnimation","rightCardsAnimation","clubNameLabel","roomLabel","rightPlayerView","leftPlayerView","bottomPlayerView","leftPlayerGameInfoView","rightPlayerGameInfoView","activePlayerSignView","leftPlayerPlayedCardListView","rightPlayerPlayedCardListView","bottomPlayerPlayedCardListView","leftPlayerClock","rightPlayerClock","bottomPlayerClock","bottomPlayerHandCardsView","playGameButtonsContainer","landlordCardsView","bottomPlayerStateView","debugWindow","wrongTypeCardImage","matchPlayerView","infoGroup","topToolbar"];
		
		this.height = 1334;
		this.width = 750;
		this.leftCardsAnimation_i();
		this.rightCardsAnimation_i();
		this.elementsContent = [this._Image1_i(),this.clubNameLabel_i(),this.roomLabel_i(),this.rightPlayerView_i(),this.leftPlayerView_i(),this.bottomPlayerView_i(),this.leftPlayerGameInfoView_i(),this.rightPlayerGameInfoView_i(),this.activePlayerSignView_i(),this.leftPlayerPlayedCardListView_i(),this.rightPlayerPlayedCardListView_i(),this.bottomPlayerPlayedCardListView_i(),this.leftPlayerClock_i(),this.rightPlayerClock_i(),this.bottomPlayerClock_i(),this.bottomPlayerHandCardsView_i(),this.playGameButtonsContainer_i(),this.landlordCardsView_i(),this.bottomPlayerStateView_i(),this.debugWindow_i(),this.infoGroup_i(),this.topToolbar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.leftPlayerPlayCardsGroup"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [124],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [98],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [154],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [133],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["hostComponent.rightPlayerPlayCardsGroup"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [945],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [97],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [574.32],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [133],[],this._Object4,"y");
	}
	var _proto = DDZPlayGameSceneUI.prototype;

	_proto.leftCardsAnimation_i = function () {
		var t = new egret.tween.TweenGroup();
		this.leftCardsAnimation = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.ease = "quadOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.rightCardsAnimation_i = function () {
		var t = new egret.tween.TweenGroup();
		this.rightCardsAnimation = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.ease = "quadInOut";
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.right = 0;
		t.source = "bg_play_game@2x_jpg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.clubNameLabel_i = function () {
		var t = new eui.Label();
		this.clubNameLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "俱乐部：来玩官方";
		t.textColor = 0x1c4977;
		t.verticalCenter = 181;
		return t;
	};
	_proto.roomLabel_i = function () {
		var t = new eui.Label();
		this.roomLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "房间：123456789";
		t.textColor = 0x1c4977;
		t.verticalCenter = 219;
		return t;
	};
	_proto.rightPlayerView_i = function () {
		var t = new DDZPlayerView();
		this.rightPlayerView = t;
		t.right = 20;
		t.scaleX = 1;
		t.skinName = "DDZPlayerUI";
		t.top = 200;
		return t;
	};
	_proto.leftPlayerView_i = function () {
		var t = new DDZPlayerView();
		this.leftPlayerView = t;
		t.left = 20;
		t.skinName = "DDZPlayerUI";
		t.top = 200;
		return t;
	};
	_proto.bottomPlayerView_i = function () {
		var t = new DDZPlayerView();
		this.bottomPlayerView = t;
		t.bottom = 20;
		t.left = 20;
		t.skinName = "DDZPlayerUI";
		return t;
	};
	_proto.leftPlayerGameInfoView_i = function () {
		var t = new DDZLeftPlayerGameInfoView();
		this.leftPlayerGameInfoView = t;
		t.height = 150;
		t.left = 189;
		t.skinName = "DDZLeftPlayerGameInfoUI";
		t.top = 186;
		t.width = 150;
		return t;
	};
	_proto.rightPlayerGameInfoView_i = function () {
		var t = new DDZRightPlayerGameInfoView();
		this.rightPlayerGameInfoView = t;
		t.right = 189;
		t.skinName = "DDZRightPlayerGameInfoUI";
		t.top = 186;
		return t;
	};
	_proto.activePlayerSignView_i = function () {
		var t = new DDZActivePlayerSignView();
		this.activePlayerSignView = t;
		t.horizontalCenter = 0;
		t.skinName = "DDZActivePlayerSignUI";
		t.verticalCenter = 20;
		return t;
	};
	_proto.leftPlayerPlayedCardListView_i = function () {
		var t = new DDZPlayedCardListView();
		this.leftPlayerPlayedCardListView = t;
		t.height = 110;
		t.left = 10;
		t.top = 491;
		t.width = 368;
		return t;
	};
	_proto.rightPlayerPlayedCardListView_i = function () {
		var t = new DDZPlayedCardListView();
		this.rightPlayerPlayedCardListView = t;
		t.height = 110;
		t.right = 10;
		t.top = 491;
		t.width = 368;
		return t;
	};
	_proto.bottomPlayerPlayedCardListView_i = function () {
		var t = new DDZPlayedCardListView();
		this.bottomPlayerPlayedCardListView = t;
		t.bottom = 398;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 750;
		return t;
	};
	_proto.leftPlayerClock_i = function () {
		var t = new DDZClockView();
		this.leftPlayerClock = t;
		t.left = 80;
		t.skinName = "DDZClockUI";
		t.top = 367;
		return t;
	};
	_proto.rightPlayerClock_i = function () {
		var t = new DDZClockView();
		this.rightPlayerClock = t;
		t.right = 80;
		t.skinName = "DDZClockUI";
		t.top = 367;
		t.width = 81;
		return t;
	};
	_proto.bottomPlayerClock_i = function () {
		var t = new DDZClockView();
		this.bottomPlayerClock = t;
		t.bottom = 492;
		t.height = 101;
		t.left = 80;
		t.skinName = "DDZClockUI";
		t.width = 81;
		return t;
	};
	_proto.bottomPlayerHandCardsView_i = function () {
		var t = new DDZBottomPlayerHandCardsView();
		this.bottomPlayerHandCardsView = t;
		t.bottom = 68;
		t.horizontalCenter = 2;
		t.skinName = "DDZBottomPlayerHandCardsUI";
		return t;
	};
	_proto.playGameButtonsContainer_i = function () {
		var t = new DDZPlayGameButtonsContainer();
		this.playGameButtonsContainer = t;
		t.bottom = 390;
		t.horizontalCenter = 0;
		t.skinName = "DDZPlayGameButtonsContainerUI";
		return t;
	};
	_proto.landlordCardsView_i = function () {
		var t = new DDZLandlordCardsView();
		this.landlordCardsView = t;
		t.horizontalCenter = 0.5;
		t.skinName = "DDZLandlordCardsUI";
		t.top = 84;
		return t;
	};
	_proto.bottomPlayerStateView_i = function () {
		var t = new DDZPlayerStateView();
		this.bottomPlayerStateView = t;
		t.bottom = 498;
		t.height = 52;
		t.horizontalCenter = 0;
		t.skinName = "DDZPlayerStateUI";
		t.width = 302;
		return t;
	};
	_proto.debugWindow_i = function () {
		var t = new DDZPlayGameDebugWindow();
		this.debugWindow = t;
		t.horizontalCenter = 0;
		t.skinName = "DDZPlayGameDebugWindow2UI";
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.visible = false;
		return t;
	};
	_proto.infoGroup_i = function () {
		var t = new eui.Group();
		this.infoGroup = t;
		t.bottom = 498;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 350;
		t.elementsContent = [this.wrongTypeCardImage_i(),this.matchPlayerView_i()];
		return t;
	};
	_proto.wrongTypeCardImage_i = function () {
		var t = new eui.Image();
		this.wrongTypeCardImage = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_wrong_card_type_png";
		t.visible = false;
		t.x = 14;
		return t;
	};
	_proto.matchPlayerView_i = function () {
		var t = new DDZMatchPlayerView();
		this.matchPlayerView = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.skinName = "DDZPlayGameMatchPlayerUI";
		t.visible = false;
		return t;
	};
	_proto.topToolbar_i = function () {
		var t = new DDZPlayGameTopToolbar();
		this.topToolbar = t;
		t.right = 0;
		t.skinName = "DDZPlayGameTopToolbarUI";
		t.top = 0;
		return t;
	};
	return DDZPlayGameSceneUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Debug/DDZPlayGameDebugWindowUI.exml'] = window.DDZPlayGameDebugWindowUI = (function (_super) {
	__extends(DDZPlayGameDebugWindowUI, _super);
	function DDZPlayGameDebugWindowUI() {
		_super.call(this);
		this.skinParts = ["roomIdLabel","serverLabel","gameMatchIdLabel","appVersionLabel","contentGroup","contentScroller"];
		
		this.height = 300;
		this.width = 1000;
		this.elementsContent = [this._Rect1_i(),this._Group2_i(),this.contentScroller_i()];
	}
	var _proto = DDZPlayGameDebugWindowUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.strokeAlpha = 0.4;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 1000;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.roomIdLabel_i(),this.serverLabel_i(),this._Group1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.roomIdLabel_i = function () {
		var t = new eui.Label();
		this.roomIdLabel = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "房间id";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 0;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.serverLabel_i = function () {
		var t = new eui.Label();
		this.serverLabel = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "192.168.200.50";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 25;
		t.width = 1000;
		t.x = 314;
		t.y = 35;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.gameMatchIdLabel_i(),this.appVersionLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.gameMatchIdLabel_i = function () {
		var t = new eui.Label();
		this.gameMatchIdLabel = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "游戏id：xxxxxx";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.x = 439;
		t.y = -30;
		return t;
	};
	_proto.appVersionLabel_i = function () {
		var t = new eui.Label();
		this.appVersionLabel = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "2.0.0";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.x = 449;
		t.y = -20;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.bottom = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.width = 1000;
		t.viewport = this.contentGroup_i();
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		return t;
	};
	return DDZPlayGameDebugWindowUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayGame/Player/DDZBottomPlayerInfoUI.exml'] = window.DDZBottomPlayerInfoUI = (function (_super) {
	__extends(DDZBottomPlayerInfoUI, _super);
	function DDZBottomPlayerInfoUI() {
		_super.call(this);
		this.skinParts = ["nameLabel"];
		
		this.height = 40;
		this.width = 220;
		this.elementsContent = [this._Rect1_i(),this.nameLabel_i()];
	}
	var _proto = DDZBottomPlayerInfoUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.strokeAlpha = 0.4;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.bold = true;
		t.fontFamily = "Verdana";
		t.height = 30;
		t.horizontalCenter = 0;
		t.multiline = false;
		t.size = 25;
		t.strokeColor = 0x140a05;
		t.text = "Mark";
		t.textAlign = "center";
		t.textColor = 0xe7e5e5;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.wordWrap = true;
		return t;
	};
	return DDZBottomPlayerInfoUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TabBarItemSkin.exml'] = window.TabBarItemSkin = (function (_super) {
	__extends(TabBarItemSkin, _super);
	function TabBarItemSkin() {
		_super.call(this);
		this.skinParts = ["img_up","img_down","img_disabled"];
		
		this.height = 70;
		this.width = 219;
		this.elementsContent = [];
		this.img_up_i();
		
		this.img_down_i();
		
		this.img_disabled_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("img_up","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("img_down","",1,"")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("img_disabled","",1,"")
				])
		];
	}
	var _proto = TabBarItemSkin.prototype;

	_proto.img_up_i = function () {
		var t = new eui.Image();
		this.img_up = t;
		t.percentHeight = 100;
		t.source = "tabbar_mail_item_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.img_down_i = function () {
		var t = new eui.Image();
		this.img_down = t;
		t.percentHeight = 100;
		t.right = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.img_disabled_i = function () {
		var t = new eui.Image();
		this.img_disabled = t;
		t.percentHeight = 100;
		t.right = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TabBarItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserInfo/DDZUserInfoAvatarUI.exml'] = window.DDZUserInfoAvatarUI = (function (_super) {
	__extends(DDZUserInfoAvatarUI, _super);
	var DDZUserInfoAvatarUI$Skin24 = 	(function (_super) {
		__extends(DDZUserInfoAvatarUI$Skin24, _super);
		function DDZUserInfoAvatarUI$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZUserInfoAvatarUI$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "img_userinfo_avatar_border@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZUserInfoAvatarUI$Skin24;
	})(eui.Skin);

	function DDZUserInfoAvatarUI() {
		_super.call(this);
		this.skinParts = ["avatarImage","avatarButton"];
		
		this.height = 163;
		this.width = 163;
		this.elementsContent = [this.avatarImage_i(),this.avatarButton_i()];
	}
	var _proto = DDZUserInfoAvatarUI.prototype;

	_proto.avatarImage_i = function () {
		var t = new eui.Image();
		this.avatarImage = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "img_userinfo_default_avatar@2x_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.avatarButton_i = function () {
		var t = new eui.Button();
		this.avatarButton = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.skinName = DDZUserInfoAvatarUI$Skin24;
		return t;
	};
	return DDZUserInfoAvatarUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserInfo/DDZUserInfoGameDataUI.exml'] = window.DDZUserInfoGameDataUI = (function (_super) {
	__extends(DDZUserInfoGameDataUI, _super);
	function DDZUserInfoGameDataUI() {
		_super.call(this);
		this.skinParts = ["titleLabel","valueLabel"];
		
		this.height = 50;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DDZUserInfoGameDataUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.titleLabel_i(),this.valueLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.left = 0;
		t.size = 25;
		t.text = "总局数：";
		t.textColor = 0x5a1d17;
		t.verticalCenter = 0;
		return t;
	};
	_proto.valueLabel_i = function () {
		var t = new eui.Label();
		this.valueLabel = t;
		t.left = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "118";
		t.textAlign = "left";
		t.textColor = 0xfcefe8;
		t.verticalCenter = 0;
		t.x = 96;
		t.y = 13;
		return t;
	};
	return DDZUserInfoGameDataUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserInfo/DDZUserInfoGenderUI.exml'] = window.DDZUserInfoGenderUI = (function (_super) {
	__extends(DDZUserInfoGenderUI, _super);
	function DDZUserInfoGenderUI() {
		_super.call(this);
		this.skinParts = ["genderImage"];
		
		this.height = 25;
		this.width = 25;
		this.elementsContent = [this.genderImage_i()];
	}
	var _proto = DDZUserInfoGenderUI.prototype;

	_proto.genderImage_i = function () {
		var t = new eui.Image();
		this.genderImage = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "img_userinfo_male@2x_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return DDZUserInfoGenderUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserInfo/DDZUserInfoNameInputUI.exml'] = window.DDZUserInfoNameInputUI = (function (_super) {
	__extends(DDZUserInfoNameInputUI, _super);
	var DDZUserInfoNameInputUI$Skin25 = 	(function (_super) {
		__extends(DDZUserInfoNameInputUI$Skin25, _super);
		function DDZUserInfoNameInputUI$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZUserInfoNameInputUI$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_userinfo_textinput_clean@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZUserInfoNameInputUI$Skin25;
	})(eui.Skin);

	function DDZUserInfoNameInputUI() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay","cleanButton"];
		
		this.height = 56;
		this.minHeight = 40;
		this.minWidth = 300;
		this.width = 540;
		this.elementsContent = [this._Image1_i(),this.textDisplay_i(),this.cleanButton_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",2,"cleanButton")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",2,"cleanButton")
				])
		];
	}
	var _proto = DDZUserInfoNameInputUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "bg_userinfo_textinput@2x_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.percentHeight = 50;
		t.left = "10";
		t.right = "40";
		t.size = 25;
		t.text = "";
		t.textColor = 0x8f7c69;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.percentHeight = 50;
		t.left = 10;
		t.right = 40;
		t.size = 25;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xc4b5a5;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.cleanButton_i = function () {
		var t = new eui.Button();
		this.cleanButton = t;
		t.label = "";
		t.right = 10;
		t.verticalCenter = 0;
		t.skinName = DDZUserInfoNameInputUI$Skin25;
		return t;
	};
	return DDZUserInfoNameInputUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserInfo/DDZUserInfoPopupUI.exml'] = window.DDZUserInfoPopupUI = (function (_super) {
	__extends(DDZUserInfoPopupUI, _super);
	var DDZUserInfoPopupUI$Skin26 = 	(function (_super) {
		__extends(DDZUserInfoPopupUI$Skin26, _super);
		function DDZUserInfoPopupUI$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_userinfo_edit_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZUserInfoPopupUI$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_userinfo_edit@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZUserInfoPopupUI$Skin26;
	})(eui.Skin);

	var DDZUserInfoPopupUI$Skin27 = 	(function (_super) {
		__extends(DDZUserInfoPopupUI$Skin27, _super);
		function DDZUserInfoPopupUI$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_userinfo_bind_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZUserInfoPopupUI$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_userinfo_bind@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZUserInfoPopupUI$Skin27;
	})(eui.Skin);

	function DDZUserInfoPopupUI() {
		_super.call(this);
		this.skinParts = ["userAvatar","nameLabel","genderView","editUsernameButton","idLabel","bindPhoneButton","basicInfoGroup","totalGame","winningRate","escapeRate","winningAmount","continueWinningAmount","userDataGroup","closeButton"];
		
		this.height = 500;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.userAvatar_i(),this.basicInfoGroup_i(),this.userDataGroup_i(),this.closeButton_i()];
	}
	var _proto = DDZUserInfoPopupUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "bg_userinfo@2x_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userAvatar_i = function () {
		var t = new DDZUserInfoAvatar();
		this.userAvatar = t;
		t.left = 35;
		t.skinName = "DDZUserInfoAvatarUI";
		t.top = 86;
		return t;
	};
	_proto.basicInfoGroup_i = function () {
		var t = new eui.Group();
		this.basicInfoGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.right = 20;
		t.top = 94;
		t.width = 500;
		t.elementsContent = [this._Group1_i(),this.idLabel_i(),this.bindPhoneButton_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.nameLabel_i(),this.genderView_i(),this.editUsernameButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "会跳的小恐龙";
		t.textColor = 0x79614c;
		t.top = 10;
		t.x = -8;
		t.y = 6;
		return t;
	};
	_proto.genderView_i = function () {
		var t = new DDZUserInfoGenderView();
		this.genderView = t;
		t.skinName = "DDZUserInfoGenderUI";
		t.top = 22;
		t.x = 197;
		return t;
	};
	_proto.editUsernameButton_i = function () {
		var t = new eui.Button();
		this.editUsernameButton = t;
		t.label = "";
		t.right = 60;
		t.top = 10;
		t.skinName = DDZUserInfoPopupUI$Skin26;
		return t;
	};
	_proto.idLabel_i = function () {
		var t = new eui.Label();
		this.idLabel = t;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 27;
		t.text = "ID: 1001111";
		t.textColor = 0xbf9d75;
		t.top = 49;
		return t;
	};
	_proto.bindPhoneButton_i = function () {
		var t = new eui.Button();
		this.bindPhoneButton = t;
		t.label = "";
		t.right = 23;
		t.verticalCenter = -16.5;
		t.skinName = DDZUserInfoPopupUI$Skin27;
		return t;
	};
	_proto.userDataGroup_i = function () {
		var t = new eui.Group();
		this.userDataGroup = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.verticalCenter = 163;
		t.visible = false;
		t.width = 765;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.totalGame_i(),this.winningRate_i(),this.escapeRate_i(),this.winningAmount_i(),this.continueWinningAmount_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 80;
		t.orientation = "rows";
		t.verticalAlign = "middle";
		t.verticalGap = 5;
		return t;
	};
	_proto.totalGame_i = function () {
		var t = new DDZUserInfoGameDataView();
		this.totalGame = t;
		t.bottom = 205;
		t.height = 50;
		t.horizontalCenter = -262;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZUserInfoGameDataUI";
		t.width = 200;
		t.x = 32;
		t.y = -6;
		return t;
	};
	_proto.winningRate_i = function () {
		var t = new DDZUserInfoGameDataView();
		this.winningRate = t;
		t.bottom = 205;
		t.height = 50;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZUserInfoGameDataUI";
		t.width = 200;
		t.x = 294;
		t.y = -6;
		return t;
	};
	_proto.escapeRate_i = function () {
		var t = new DDZUserInfoGameDataView();
		this.escapeRate = t;
		t.bottom = 205;
		t.height = 50;
		t.horizontalCenter = 262;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZUserInfoGameDataUI";
		t.width = 200;
		t.x = 556.0000000000001;
		t.y = -6;
		return t;
	};
	_proto.winningAmount_i = function () {
		var t = new DDZUserInfoGameDataView();
		this.winningAmount = t;
		t.bottom = 157;
		t.height = 50;
		t.horizontalCenter = -262;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZUserInfoGameDataUI";
		t.width = 200;
		t.x = 32;
		t.y = 42.00000000000006;
		return t;
	};
	_proto.continueWinningAmount_i = function () {
		var t = new DDZUserInfoGameDataView();
		this.continueWinningAmount = t;
		t.bottom = 157;
		t.height = 50;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZUserInfoGameDataUI";
		t.width = 200;
		t.x = 294;
		t.y = 42.00000000000006;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new DDZPopupCloseButton();
		this.closeButton = t;
		t.right = 14;
		t.skinName = "DDZGrayPopupCloseButtonUI";
		t.top = 6;
		return t;
	};
	return DDZUserInfoPopupUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserInfo/DDZUserInfoSceneUI.exml'] = window.DDZUserInfoSceneUI = (function (_super) {
	__extends(DDZUserInfoSceneUI, _super);
	function DDZUserInfoSceneUI() {
		_super.call(this);
		this.skinParts = ["backgroundImage","popup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.backgroundImage_i(),this._DDZTransparentCover1_i(),this.popup_i()];
	}
	var _proto = DDZUserInfoSceneUI.prototype;

	_proto.backgroundImage_i = function () {
		var t = new eui.Image();
		this.backgroundImage = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._DDZTransparentCover1_i = function () {
		var t = new DDZTransparentCover();
		t.horizontalCenter = 0;
		t.skinName = "DDZTransparentCoverUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto.popup_i = function () {
		var t = new DDZUserInfoPopup();
		this.popup = t;
		t.horizontalCenter = -1;
		t.skinName = "DDZUserInfoPopupUI";
		t.verticalCenter = 0;
		return t;
	};
	return DDZUserInfoSceneUI;
})(eui.Skin);