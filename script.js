// template
var template = document.querySelector('#message-template').content;
var message = template.querySelector('div.chat-message');

// form
var form = document.querySelector('.chat-form');
var input = form.querySelector('.chat-form-input');
var submitBtn = form.querySelector('.chat-form-button');

// chat
var chat = document.querySelector('.chat-content');
var messagesGroup = chat.children;

// clean
var cleanInput = (input) => {
  input.value = '';
};

// add message onsubmit
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var inputValue = input.value;
  var newMessage = message.cloneNode(true);
  var messageText = newMessage.querySelector('.chat-message-text');
  messageText.textContent = inputValue;
  chat.appendChild(newMessage);

  // set new length
  closedFuncNewLength(messagesGroup);
  // clean
  cleanInput(input);
});

var deleteMessage = (element) => {
  var deleteMessageBtn = element.querySelector('.chat-message-button');
  deleteMessageBtn.addEventListener('click', function () {
    element.remove();
  })
}

var closedFuncNewLength = (array) => {
  for (var i = 0; i < array.length; i++) {
    deleteMessage(array[i]);
  }
};





/*

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).

- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
