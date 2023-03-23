function expandImage(imageUrl) {
  const expandedImage = document.createElement('div');
  expandedImage.classList.add('expanded-image');

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Expanded Image';

  expandedImage.appendChild(img);

  document.body.appendChild(expandedImage);

  expandedImage.addEventListener('click', function() {
    this.remove();
  });
}
