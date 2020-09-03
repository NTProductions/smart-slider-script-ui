// smart ui slider
var window = new Window("palette", "Smart Slider UI", undefined);
window.orientation = "row";
var displayText = window.add("statictext", undefined, "value");
var slider = window.add("slider", undefined, "");
slider.minvalue = 1;
slider.maxvalue = 100;
slider.value = 50;
var sliderText = window.add("statictext", undefined, "50%");
sliderText.characters = 4;

slider.onChanging = function() {
        sliderText.text = Math.floor(slider.value)+"%";
    }

//~ slider.onChange = function() {
//~         sliderText.text = Math.floor(slider.value)+"%";
//~     }

window.center();
window.show();