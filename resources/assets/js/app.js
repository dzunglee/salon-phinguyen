/**
 * Created by salipro on 2/26/19.
 * @copyright: 2019 - Suga Co.,Ltd
 */

if ("undefined" === typeof jQuery) throw new Error("w3CMS requires jQuery");

NProgress.configure({parent: '#pjax-container'});
$.widget.bridge('uibutton', $.ui.button);

NProgress.start();

window.onload = (event) => {
  NProgress.done();
};
$.w3CMS = {},
  $.w3CMS.sidebar = {
    init: function () {
      var sidebar = $(".sidebar-menu");
      sidebar.on("click", "li a", function (e) {
        sidebar.find('li').removeClass('active')
        $(this).closest('li').addClass('active').closest('li.treeview').addClass('active')
      })
    }
  },
  $.w3CMS.loading = {
    init: function () {
      // NProgress.start();
      $(window).on("load pjax:end", function (e) {
        NProgress.done();
      });
    }
  },
  $.w3CMS.pjax = {
    init: function () {
      $.pjax.defaults.timeout = 5000;
      $.pjax.defaults.maxCacheLength = 0;

      $(document).pjax('a:not(a[target="_blank"])[pjax]', '#pjax-container')

      $(document).on('submit', 'form[pjax]', function (event) {
        console.log('aaa')
        $.pjax.submit(event, '#pjax-container')
        event.preventDefault()
      });

      $(document).on('pjax:timeout', function (event) {
        event.preventDefault();
      })

      $(document).on('pjax:popstate', function () {
        console.log('popstate')

      });

      $(document).on('pjax:send', function (xhr) {
        NProgress.start();
        $('.modal').modal('hide');
        if (xhr.relatedTarget && xhr.relatedTarget.tagName && xhr.relatedTarget.tagName.toLowerCase() === 'form') {
          $submit_btn = $('form[pjax] :submit');
          if ($submit_btn) {
            $submit_btn.button('loading')
          }
        }
      });

      $(document).on('pjax:complete', function (xhr) {
        NProgress.done();
        $('.modal-backdrop').remove();
        if (xhr.relatedTarget && xhr.relatedTarget.tagName && xhr.relatedTarget.tagName.toLowerCase() === 'form') {
          $submit_btn = $('form[pjax] :submit');
          if ($submit_btn) {
            $submit_btn.button('reset')
          }
        }

      });


      $(document).on('pjax:complete', function (evt, xhr) {
        //script = $('<div/>').html(xhr.responseText)
        //$('[data-script-scope]').replaceWith(script.find('[data-script-scope]'));

      });
    }
  },

  $(function () {
    /**
     * Declaration DOM plugin here.
     */
    $.w3CMS.sidebar.init();
    $.w3CMS.loading.init();
    $.w3CMS.pjax.init();

  }),
  function ($) {
    "use strict";

    let body = $('body');
    body.on('click', '.grid-row-delete', function (e) {
      e.preventDefault();
      e.stopPropagation();
      let me = $(this);
      swal({
        title: "Are you sure?",
        text: "Are you sure you want to delete?",
        icon: "warning",
        dangerMode: true,
        buttons: true,
      })
        .then(willDelete => {
          if (willDelete) {
            let me = $(this);
            let url = me.data('url');
            $.ajax({
              url: url,
              type: 'DELETE',
              data: {
                '_token': $('meta[name="csrf-token"]').attr('content')
              },
              statusCode: {
                403: function () {
                  toastr.error('Access Forbidden', null, []);

                },
                400: function (result) {
                  toastr.error(result.responseText, null, []);
                },
                500: function () {
                  toastr.error('Internal Server Error', null, []);
                }
              },
              success: function (result) {
                //me.closest(me.data('parent-elm')).remove();
                toastr.success('Deleted!', null, []);
                $.pjax.reload({container: '#pjax-container'});
              }
            });
          }
        });
    });

    $('.remove-able i').click(function () {
      let me = $(this);
      $(this).prev().val('');
      me.closest('form').submit();
    });

    body.on('mouseover', '.remove-able', function () {
      if (!$(this).find('input').val()) {
        $(this).find('i').css('display', 'none');
      } else {
        $(this).find('i').css('display', 'block');
      }
    });
    $('.remove-able').mouseleave(function () {
      $(this).find('i').css('display', 'none');
    });

    $('#btn-signout').click(function (e) {
      if (confirm("Are you sure you want to logout?")) {
      } else {
        e.preventDefault();
      }
    });


    body.on('click', '.edit-ajax', function (e) {
      e.preventDefault();
      e.stopPropagation();
      let me = $(this);
      let url = me.attr('href');
      let modal = $(me.data('target'));
      let loading = '<div class="text-center"><i class="fa fa-spinner fa-spin"></i><span class="sr-only">Loading...</span></div>';
      let contentModal = modal.find('.modal-body');
      contentModal.empty();
      contentModal.append(loading);
      modal.modal('show');
      $.ajax({
        url: url,
        type: 'get',
        data: {
          '_token': $('meta[name="csrf-token"]').attr('content')
        },
        statusCode: {
          403: function () {
            toastr.error('Access Forbidden', null, []);

          },
          400: function (result) {
            toastr.error(result.responseText, null, []);
          },
          500: function () {
            toastr.error('Internal Server Error', null, []);
          }
        },
        success: function (result) {
          contentModal.empty();
          contentModal.append(result);
        }
      }).done(function () {
      });
    });

    body.on('submit', '.form-ajax', function (e) {
      e.preventDefault();
      e.stopPropagation();
      let me = $(this);
      let method = me.data('method');
      let url = me.attr('action');
      me.find('.alert').remove();
      $.ajax({
        url: url,
        type: method,
        data: me.serialize(),
        statusCode: {
          422: function (result) {
            let errors = result.responseJSON.errors;
            if (errors) {
              let errorBlock = $('<div class="alert alert-danger alert-dismissable">\n' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>\n' +
                '</div>');
              $.each(errors, function (index, value) {
                let err = $('<p></p>');
                err.text(value);
                errorBlock.append(err);
                me.prepend(errorBlock);
              })
            }
          },
          403: function () {
            toastr.error('Access Forbidden', null, []);

          },
          400: function (result) {
            toastr.error(result.responseText, null, []);
          },
          500: function () {
            toastr.error('Internal Server Error', null, []);
          }
        },
        success: function (result) {
          toastr.success(result, null, []);
          $.pjax.reload({container: '#pjax-container'});
        }
      }).done(function () {
      });
    });

    body.on('click', '.filter-chip', function (e) {
      let me = $(this);
      let form = me.closest('form');
      let name = me.data('name');
      let value = me.data('value');
      let input = $('input[name="' + name + '"][value="' + value + '"]');
      if (input.length > 0) {
        input.remove();
      } else {
        $('input[name="' + name + '"]').remove();
        let newInput = $('<input type="hidden">');
        newInput.attr('name', name);
        newInput.attr('value', value);
        form.prepend(newInput);
      }
      form.submit();
    });


    body.on('click', '.media-loader', function () {
      let parent = $(this).closest('.media-loader-parent');
      let url = $('meta[name="admin-url"]').attr('content') + '/media';
      $.ajax({
        type: "GET",
        url: url,
        data: {
          'is-modal': true,
        },
        statusCode: {
          404: function () {
            toastr.error('File not found', null, []);
          },
          401: function () {
            toastr.error('Not authorized', null, []);
          },
          403: function () {
            toastr.error('Access Forbidden', null, []);
          },
          400: function (result) {
            toastr.error(result.responseText, null, []);
          },
          500: function () {
            toastr.error('Internal Server Error', null, []);
          }
        },
        success: function (data) {
          parent.append(data);
          let modal = parent.find('#modal-popup-file');
          modal.modal('show');
          modal.on('hidden.bs.modal', function () {
            modal.parent('div').find('#modal-panel').remove();
            modal.remove();
            $('.modal-backdrop').remove();
          });
        }
      });
    });


    body.on('change', '.changeType', function () {
      var me = $(this);
      var target = $(me.data('target'));
      var display = ['.text', '.number', '.email', '.time', '.boolean', '.image', '.dates', '.dateRanger', '.color', '.richTextEditor'];

      display.forEach(function (e) {
        target.find(e).css('display', 'none').attr('name', '').val('');
      });
      target.find('.note-editor').css('display', 'none');
      target.find('*').attr("required", false);
      var time = me.closest('.row').data('key');
      target.find('.' + me.val()).attr("required", true).attr('name', 'attributes[' + time + '][content]').css('display', 'block').find('*').css('display', '-webkit-box');
      if (me.val() == 'richTextEditor') {
        target.find('.richTextEditor').css('display', 'none');
        target.find('.note-editor').css('display', 'block');
      } else if (me.val() == 'image') {
        target.find('script').css('display', 'none');
        target.find('.preview').css('display', 'block');
      }
    });

    body.on('click', '.btnRemove', function () {
      var me = $(this);
      me.closest('.row').remove();
    });

  }
  (jQuery);

(function ($) {

  $.CheckStringStrength = function (password) {
    if (password.length == 0) {
      return 0;
    }
    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password)) {
        passed++;
      }
    }

    //Validate for length of Password.
    if (passed > 2 && password.length > 8) {
      passed++;
    }

    if (password.length < 6) {
      return "weak";
    }

    if (passed >= 4)
      return "strong";
    if (passed >= 2)
      return "good";
    return "weak";
  };

  $.str_slug = function (title) {
    var slug;
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có id “slug”
    return slug;
  }


  $.bytesToSize = function (bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round((bytes / Math.pow(1024, i)) * 10) / 10 + '' + sizes[i];
  };
})(jQuery);

$(document).ajaxError(function (event, request, settings) {
  if (request && request.status == 419) {
    swal({
      title: "The page has expired due to inactivity.",
      text: "Do you want to refresh page?",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    })
      .then(action => {
        if (action) {
          location.reload();
        }
      });

  }
});
