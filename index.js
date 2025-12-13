document.addEventListener('DOMContentLoaded', function () {

  var signaturePageUrl = 'signature.html';
  var checkBox = document.getElementById('sg-agree-check');
  var submitBtn = document.getElementById('sg-submit-btn');

  if (checkBox && submitBtn) {
    // チェックボックスの変更検知
    checkBox.addEventListener('change', function () {
      // チェックされたらボタン有効化、外れたら無効化
      submitBtn.disabled = !this.checked;
    });

    // 送信ボタンクリック時の処理
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // 署名ページへ遷移
      window.location.href = signaturePageUrl;
    });
  }
});