// $(function () {

  //ページ内スクロール
  // var $nav = $(".header");
  // var navHeight = $nav.outerHeight();

  // $('a[href*="#"]').on("click", function () {
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? "html" : href);
  //   var position = target.offset().top - navHeight;
  //   $("html, body").animate(
  //     {
  //       scrollTop: position,
  //     },
  //     300,
  //     "swing"
  //   );
  //   return false;
  // });

  //スクロールに応じてヘッダーの背景色が変化
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 50) {
  //     $('.header').addClass('active');
  //   } else {
  //     $('.header').removeClass('active');
  //   }
  // });

  //ページトップ
//   $("#js-page-top").on("click", function () {
//     $("body,html").animate(
//       {
//         scrollTop: 0,
//       },
//       300
//     );
//     return false;
//   });
// });

// アコーディオン
// $('.accordion-header').click(function() { 
//   $(this).next().slideToggle();
//   $(this).toggleClass('active');
// });

// タイトルバウンス
// $(function () {
//   $('.title').each(function () {
//     const text = $(this).text().trim();
//     let newText = '';
//     for (let i = 0; i < text.length; i++) {
//       newText += `<span style="--i:${i}">${text[i]}</span>`;
//     }
//     $(this).html(newText);
//   });

//   $(window).on('scroll', function () {
//     $('.title').each(function () {
//       const offset = $(this).offset().top;
//       const scrollTop = $(window).scrollTop();
//       const windowHeight = $(window).height();
//       if (scrollTop + windowHeight > offset - 100) {
//         $(this).addClass('show');
//       }
//     });
//   });
// });

  // カスタムカーソル
  // const cursor = document.getElementById('cursor');
  // const ring = document.getElementById('cursorRing');
  // let mx = 0, my = 0, rx = 0, ry = 0;
  // document.addEventListener('mousemove', e => {
  //   mx = e.clientX; my = e.clientY;
  //   cursor.style.left = mx + 'px';
  //   cursor.style.top = my + 'px';
  // });
  // (function animate() {
  //   rx += (mx - rx) * 0.12;
  //   ry += (my - ry) * 0.12;
  //   ring.style.left = rx + 'px';
  //   ring.style.top = ry + 'px';
  //   requestAnimationFrame(animate);
  // })();
  // document.querySelectorAll('a, .work-card, button').forEach(el => {
  //   el.addEventListener('mouseenter', () => {
  //     cursor.style.width = '16px'; cursor.style.height = '16px';
  //     ring.style.width = '52px'; ring.style.height = '52px';
  //   });
  //   el.addEventListener('mouseleave', () => {
  //     cursor.style.width = '10px'; cursor.style.height = '10px';
  //     ring.style.width = '36px'; ring.style.height = '36px';
  //   });
  // });

  // スクロールリビール
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // モーダル
  function openModal(type) {
    document.getElementById('modal-' + type).classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(type) {
    document.getElementById('modal-' + type).classList.remove('open');
    document.body.style.overflow = '';
  }
  function closeOnOverlay(e, type) {
    if (e.target === document.getElementById('modal-' + type)) closeModal(type);
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal('banner');
      closeModal('illust');
    }
  });

  // バナー画像が実際に読み込まれたらプレースホルダーを非表示
  document.querySelectorAll('.banner-item img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
      const next = img.nextElementSibling;
      if (next) next.style.display = 'none';
    }
    img.addEventListener('load', () => {
      const next = img.nextElementSibling;
      if (next) next.style.display = 'none';
    });
  });