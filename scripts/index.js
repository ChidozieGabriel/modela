require('./opencv/')

const imgElement = document.getElementById('imageSrc');
const inputElement = document.getElementById('fileInput');
inputElement.addEventListener(
  'change',
  (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
  },
  false,
);
