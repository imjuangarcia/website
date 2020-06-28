document.querySelectorAll('pre > code').forEach(function (codeBlock) {

  // Create and append the button
  const button = document.createElement('button');
  button.className = 'copy-code';
  button.type = 'button';
  button.innerText = 'Copy to Clipboard';
  const pre = codeBlock.parentNode;
  pre.appendChild(button);
  
  // Run the copy to clipboard script
  button.addEventListener('click', () => {
    copyToClipboard(codeBlock.innerText);
    button.innerText = 'Copied!';
    
    setTimeout(() => { 
      button.innerText = 'Copy to Clipboard';
    }, 1200);
  });
});