(function($) {
	// Agregar un lucky row 
	$('body').on('click', '#list-lucky .ac-add', function () {

		var itemLucky = $(this).parent().parent(),
			$this   = $(this),
			countitem = 1,
			$containerlist = $('#list-lucky'),
			$totalItems    = $('#list-lucky .lucky-row').length;

			console.log('clickeando' + $totalItems );
			if ($totalItems ) {
				addLuckyRow($containerlist, $totalItems );
			}		
	});

	// Remover un lucky row 
	$('body').on('click', '#list-lucky .ac-del', function () {

		var itemLucky = $(this).parent().parent(),
			$this   = $(this),
			countitem = 1,
			$containerlist = $('#list-lucky'),
			$totalItems    = $('#list-lucky .lucky-row').length;

			console.log('clickeando' + $totalItems );
			if ($totalItems > 1 ) {
				removeLuckyRow($containerlist,itemLucky );
			}else {
				$containerlist.append(``);
			}		
	});

})(jQuery); 

function addLuckyRow(containerlist, totalItems) {
	var countitem = 1;
	
	containerlist.append(`<div class="lucky-row mt-3" id="cupon${totalItems}"><div class="row table-grid btop"><div class="col-6 itemg itemg-sel"> <label for="">VALOR DEL CUPÓN</label> <select class="form-control" id=""><option value="0">$150 TE DA $200</option><option value="1">$200 TE DA $250</option><option value="2">$300 TE DA $350</option><option value="3">$400 TE DA $450</option><option value="4">$500 TE DA $600</option><option value="5">$600 TE DA $700</option><option value="6">$700 TE DA $950</option><option value="7">$800 TE DA $1000</option><option value="8">$900 TE DA $1,200</option> </select></div><div class="col-2 itemg countit"> <label for="">CUPÓNES</label> <input type="number" class="form-control numcps" placeholder="1" min="1" max="20"></div><div class="col-2 itemg"> <label for="">TOTAL A PAGAR</label> <span>$150</span></div><div class="col-2 itemg"> <label for="">GANASTE</label> <span>$200</span></div></div><div class="actions"> <button type="button" class="btn btn-icon btn-secondary actions__btn ac-add">+</button> <button type="button" class="btn btn-icon btn-secondary actions__btn ac-del">-</button></div></div>`);	
}

function removeLuckyRow(containerlist, itemLucky) {
	itemLucky.remove();
}


// $('body').on('click', '#newrecipe-list .edit-itemrec', function () {
// 	let itemSel = $(this).parent().parent(),
// 		$this   = $(this);

// 	if ( $this.hasClass('activeedit') ) {
// 		$this.removeClass('activeedit');
// 		itemSel.removeClass('item-edit');
// 		itemSel.find('.form-control').prop("disabled", true);
// 	}else {
// 		$this.addClass('activeedit');
// 		editItemRecipe(itemSel);
// 	}
// });