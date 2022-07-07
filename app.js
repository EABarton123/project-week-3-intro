var img_url;

function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
        return value
    } else {
        return number_value
    }
}


img_url = ['https://media.istockphoto.com/photos/elegance-peach-vintage-dress-isolated-on-white-background-picture-id1217970962?k=20&m=1217970962&s=612x612&w=0&h=XJeWZiOrycXuEawk2SnjXqCFpjZ9mMUPNKJqnx82ziU=', 'https://media.istockphoto.com/photos/flowery-evase-bateau-yellow-dress-picture-id178851955?k=20&m=178851955&s=612x612&w=0&h=PbB6SOjyZNIzTYr3qC7IY-qn1tsWWHyojRfs4XB8WhM=', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-marks-spencer-dresses-1655201433.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*'];
let element_img = document.getElementById('img');
element_img.setAttribute("src", img_url[0]);


document.getElementById('next').addEventListener('click', (event) => {
    img_url.push(img_url.shift());
    let element_img2 = document.getElementById('img');
    element_img2.setAttribute("src", img_url[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
    img_url.unshift(img_url.pop());
    let element_img3 = document.getElementById('img');
    element_img3.setAttribute("src", img_url[0]);

});

document.getElementById('submit').addEventListener('click', (event) => {
    let element_comments_made = document.getElementById('comments_made');
    element_comments_made.innerText = getNumberOrString(document.getElementById('comment').value);

});