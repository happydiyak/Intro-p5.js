function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    tint_color = "";
}
function filter_tint()
{
   tint_color = document.getElementById("filter_color").value
}
function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot()
{
    save('student_name.png');
}



