const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Behaviors.Tween,
		C3.Plugins.Browser,
		C3.Plugins.LocalStorage,
		C3.Plugins.Touch,
		C3.Plugins.PlatformInfo,
		C3.Plugins.Timeline,
		C3.Plugins.Text,
		C3.Behaviors.MoveTo,
		C3.Plugins.TextBox,
		C3.Plugins.Button,
		C3.Plugins.Arr,
		C3.Plugins.AJAX,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.SetLayerOpacity,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetPosToObject,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetZElevation,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.System.Acts.SetLayerZElevation,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.TextBox.Acts.SetReadOnly,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.TextBox.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.mid,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{正弦: 0},
	{Sprite2: 0},
	{武士下身: 0},
	{補間動畫: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{身體: 0},
	{燃燒效果: 0},
	{Browser: 0},
	{LocalStorage: 0},
	{Touch: 0},
	{設備信息: 0},
	{Timeline: 0},
	{編號: 0},
	{貢獻值: 0},
	{Sprite9: 0},
	{"12等": 0},
	{"5等": 0},
	{移動到: 0},
	{忍者: 0},
	{水: 0},
	{火: 0},
	{土: 0},
	{雷: 0},
	{文本框: 0},
	{按鈕: 0},
	{斬: 0},
	{招式: 0},
	{等級: 0},
	{AJAX: 0},
	{Sprite: 0},
	{Sprite3: 0},
	{Sprite8: 0},
	{手印: 0},
	{Sprite10: 0},
	{按鈕2: 0},
	{鍵盤: 0},
	{音頻: 0},
	{攻擊值: 0},
	{生命值: 0},
	{血: 0},
	{開頭截尾: 0},
	{Sprite11: 0},
	{武士: 0},
	{忍術選擇: 0},
	{次數: 0},
	{忍術: 0},
	{組別: 0}
];

self.InstanceType = {
	Sprite2: class extends self.ISpriteInstance {},
	武士下身: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	身體: class extends self.ISpriteInstance {},
	燃燒效果: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	設備信息: class extends self.IInstance {},
	Timeline: class extends self.IInstance {},
	貢獻值: class extends self.ITextInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	_12等: class extends self.ISpriteInstance {},
	_5等: class extends self.ISpriteInstance {},
	忍者: class extends self.ISpriteInstance {},
	文本框: class extends self.ITextInputInstance {},
	按鈕: class extends self.IButtonInstance {},
	斬: class extends self.ISpriteInstance {},
	招式: class extends self.ISpriteInstance {},
	等級: class extends self.IArrayInstance {},
	AJAX: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	手印: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	按鈕2: class extends self.IButtonInstance {},
	鍵盤: class extends self.IInstance {},
	音頻: class extends self.IInstance {},
	攻擊值: class extends self.ITextInstance {},
	血: class extends self.ISpriteInstance {},
	開頭截尾: class extends self.ITextInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	武士: class extends self.ISpriteInstance {}
}