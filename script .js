var products = [];


function addProduct() {
    var name = prompt("ادخل اسم المنتج:");

    if (!name || name.trim() === "") {
        console.log("مينفعش تسيب الاسم فاضي");
        return;
    }

    products.push(name);
    console.log("تمت الإضافة");
}


function showProducts() {
    if (products.length === 0) {
        console.log("المخزن فاضي");
        return;
    }

    console.log("---- المنتجات ----");
    products.forEach(function(el, index) {
        console.log(`${index} => ${el}`);
    });
}


function updateProduct() {
    var index = Number(prompt("ادخل رقم المنتج:"));
    var newName = prompt("ادخل الاسم الجديد:");

    if (index >= 0 && index < products.length) {
        products[index] = newName;
        console.log("تم التعديل");
    } else {
        console.log("رقم غلط");
    }
}


function deleteProduct() {
    var index = Number(prompt("ادخل رقم المنتج:"));

    if (index >= 0 && index < products.length) {
        products.splice(index, 1);
        console.log("تم الحذف");
    } else {
        console.log("رقم غلط");
    }
}

while (true) {
    var choice = prompt(
        "اختار عملية:\n1- إضافة\n2- عرض\n3- تعديل\n4- حذف\n5- خروج"
    );

    if (choice == "1") {
        addProduct();
    } else if (choice == "2") {
        showProducts();
    } else if (choice == "3") {
        updateProduct();
    } else if (choice == "4") {
        deleteProduct();
    } else if (choice == "5") {
        console.log("تم الخروج");
        break;
    } else {
        console.log("اختيار غلط");
    }
}