$(document).ready(function () {
   $('#addroom').click(function () {
      var e = $('#newroominfor')[0];

       if (e.style.display === 'none')
           e.style.display = 'block';
       else
           e.style.display = 'none';
   });
});