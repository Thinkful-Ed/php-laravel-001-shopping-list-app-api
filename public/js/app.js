/* global $ Api Render Store */
'use strict';

let api, store, render;


const API_ROOT_ELEMENT_NAME = 'API_ROOT';

$(() => {
  const apiRoot = $(`[name="${API_ROOT_ELEMENT_NAME}"]`)[0].content;
  api = new Api('/api', apiRoot);
  store = new Store();
  render = new Render(store, api);
  api.search({}, response => {
    store.data = response;
    render.shoppingList(); 
  });

  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();

	const inputForm = $(event.currentTarget);
	const newItemInput = inputForm.find('input[name=shopping-list-input]');
	
    api.create({ name: newItemInput.val() }, response => {
      newItemInput.val('');
      store.data.unshift(response);
      render.shoppingList();
    });
  });

  $('.js-shopping-list').on('click', '.js-item-id-element', event => {
    event.preventDefault();
    const id = $(event.currentTarget).attr('data-item-id');

    api.details(id, item => {
      console.log(item);
    });
  });

  $('.js-shopping-list').on('click', '.js-item-toggle', event => {
    event.preventDefault();
    const id = $(event.currentTarget)
      .closest('.js-item-id-element')
      .attr('data-item-id');
    const item = store.findById(id);

    api.update(id, { checked: !item.checked }, response => {
      item.checked = response.checked;
      render.shoppingList();
    });
  });

  $('.js-shopping-list').on('click', '.js-item-delete', event => {
    event.preventDefault();
    const id = $(event.currentTarget)
      .closest('.js-item-id-element')
      .attr('data-item-id');

    api.remove(id, () => {
      store.findByIdAndRemove(id);
      render.shoppingList();
    });
  });

  $('.js-shopping-list').on('change', '.js-shopping-item', event => {
    event.preventDefault();
    const id = $(event.currentTarget)
      .closest('.js-item-id-element')
      .attr('data-item-id');
    const itemUpdate = { name: $(event.currentTarget).val() };

    api.update(id, itemUpdate, () => {
      store.findByIdAndUpdate(id, itemUpdate);
      render.shoppingList();
    });
  });
});
