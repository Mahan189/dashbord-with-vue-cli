<template>
    <div class="container mt-5">
        <h2 class="fw_800">سبد خرید</h2>
        <div class="row">
            <div class="col-12 col-md-8">
                <div class="product mt-3 border  border-secondary rounded-1 border-opacity-25 p-3">
                    <h5 class="fw_800">محصول 1</h5>
                    <p class="fw_800">توضیحات محصول 1</p>
                    <input type="number" class="form-control fw_800 mb-2" placeholder="تعداد" name="" id="">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw_800 text-muted">قیمت: $50.00</span>
                        <span  class="fw_800 text-danger">تخفیف: 10%</span>
                    </div>
                    <button class="btn btn-primary mt-2">افزودن به سبد خرید</button>
                </div>
                <div class="product mt-3 border  border-secondary rounded-1 border-opacity-25 p-3">
                    <h5 class="fw_800">محصول 1</h5>
                    <p class="fw_800">توضیحات محصول 1</p>
                    <input type="number" class="form-control fw_800 mb-2" placeholder="تعداد" name="" id="">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw_800 text-muted">قیمت: $50.00</span>
                        <span  class="fw_800 text-danger">تخفیف: 10%</span>
                    </div>
                    <button class="btn btn-primary mt-2">افزودن به سبد خرید</button>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card mt-3">
                    <div class="card-body">
                        <h5 class="fw_800">سبد خرید </h5>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="fw_800">محصول 1</span>
                                <span class="badge bg-primary rounded-pill fw_600">1</span>
                                <span class="badge bg-success rounded-pill fw_600">$45.00</span>
                                <button class="btn-close"></button>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="fw_800">محصول 1</span>
                                <span class="badge bg-primary rounded-pill fw_600">1</span>
                                <span class="badge bg-success rounded-pill fw_600">$45.00</span>
                                <button class="btn-close"></button>
                            </li>
                        </ul>
                        <hr>
                        <h5 class="fw_800 fs-6">جمع کل: $172.50</h5>
                        <button class="btn btn-success mt-3">پرداخت</button>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>