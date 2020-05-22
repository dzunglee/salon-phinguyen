$(document).ready(function () {
  const body = $('body'),
    url = $('meta[name="base_url"]').attr('content'),
    token = $('meta[name="csrf-token"]').attr('content');
  $('[data-toggle=tooltip]').tooltip({
    placement: 'left'
  });

  body.on('change', '#switchLang', function (e) {
    let theme = '';
    if ($(this).is(":checked")) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    changeTheme(theme);
    promiseAjax(url + '/change-theme', 'GET', {theme});
  });

  function changeTheme(theme) {
    const css = $('#my-css'), navbar = $('.navbar');
    css.attr('href', window.theme[theme].css);
    navbar.addClass('navbar-' + theme);
    $('.logo').toggleClass('hide');
  }

  function promiseAjax(url, method, data) {
    return $.ajax({
      type: method,
      data: data,
      url: url
    });
  }

  body.on('click', '.switchLanguage', function (e) {
    e.preventDefault();
    const me = $(this);
    if (!me.hasClass('active'))
      window.location.href = me.data('url') + '?locale=' + me.data('locale');
  });
});