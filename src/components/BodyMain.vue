<template>
    <!-- main -->
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg border-bottom border-secondary border-opacity-10">
        <div class="container-fluid">
            <a href="" class="navbar-brand mb-4">پیشخوان</a>
            <router-link to="/login" class="navbar-brand">ثبت نام / ورود</router-link>

            <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#exampeloffcanvas">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start d-lg-none" id="exampeloffcanvas">
                <div class="d-flex flex-column  h-100 p-3 overflow-auto">
                    <div class="d-flex flex-row-reverse justify-content-between align-items-center">
                        <button class="btn-close" data-bs-dismiss="offcanvas"></button>
                        <a href="#"
                            class="d-flex gap-2 justify-content-start align-items-center text-decoration-none link-body-emphasis">
                            <img src="../../dashbord/img/logo.webp" width="70" alt="">
                            <span class="fs-4 fw-bold">میلاد</span>
                        </a>

                    </div>


                    <hr>
                    <ul class="nav nav-pills d-block mb-auto">
                        <li class="nav-item ">
                            <a href="" class="nav-link d-flex gap-3  active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-house-door" viewBox="0 0 16 16">
                                    <path
                                        d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z">
                                    </path>
                                </svg>
                                <span>خانه</span>
                            </a>

                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-flex gap-3 link-body-emphasis ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-speedometer2" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z">
                                    </path>
                                    <path fill-rule="evenodd"
                                        d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3">
                                    </path>
                                </svg>
                                <span>داشبورد</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <div style="display: flex; margin-right:15px;">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-bag" viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z">
                                        </path>
                                    </svg>
                                </span>
                                <router-link to="/Ordear"
                                    class="nav-link d-flex gap-3 link-body-emphasis ">سفارش</router-link>

                            </div>
                            <!-- <a href="#" class="nav-link d-flex gap-3 link-body-emphasis ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z">
                                                </path>
                                            </svg>
                                            <span>سفارش</span>
                                        </a> -->
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-flex gap-3 link-body-emphasis ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-book" viewBox="0 0 16 16">
                                    <path
                                        d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783">
                                    </path>
                                </svg>
                                <span>دوره ها</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-flex gap-3 link-body-emphasis ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z">
                                    </path>
                                </svg>
                                <span>مشتریان</span>
                            </a>
                        </li>

                    </ul>
                    <hr>
                    <div class="dropdown ">
                        <a href="" data-bs-toggle="dropdown"
                            class="dropdown-toggle  d-flex gap-3 align-items-center text-decoration-none link-body-emphasis">
                            <img src="../../dashbord/img/user.jpg" width="32" height="32" class="rounded-circle "
                                alt="">
                            <strong>ماهان حسینی</strong>
                        </a>
                        <ul class="dropdown-menu shadow" data-poper-plecment="top-end">
                            <li>
                                <a href="" class="dropdown-item">پروزه جدید</a>
                                <router-link to="/setiing" class="dropdown-item">تنظیمات</router-link>
                                <a href="" class="dropdown-item">پروفایل</a>
                                <a href="" class="dropdown-item">خروج</a>

                            </li>

                        </ul>

                    </div>
                </div>

            </div>
        </div>


    </nav>
    <!-- card -->
    <div class="px-3 py-4">
        <h2>
            مهرشاد براتی عزیز؛ خوش اومدی 🙌
        </h2>
    </div>
    <div class="row px-3 ">
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
            <div
                class="d-flex align-items-center justify-content-between bg-info bg-gradient rounded-3 px-3 py-4 position-relative">
                <div>
                    <h5 class="fw-bold text-light text-nowrap">پیشرفت کاربر</h5>
                    <span class="fs-3  text-light text-nowrap">53%</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="117" height="51" viewBox="0 0 117 51" fill="none">
                        <g filter="url(#filter0_f_3_639)">
                            <circle cx="107" cy="20" r="5" fill="#fff"></circle>
                        </g>
                        <path
                            d="M1 49.5L8.5 26.5L17 37L22 19.5L31 37L44.5 3L57.5 26.5L72 19.5L83.5 31L93.5 6.5L101 19.5H108"
                            stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                        <defs>
                            <filter id="filter0_f_3_639" x="97" y="10" width="20" height="20"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                </feBlend>
                                <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_3_639">
                                </feGaussianBlur>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div
                    class="position-absolute bottom-0 start-0 text-center bg-dark bg-opacity-25 w-100 p-1 overflow-hidden">
                    <a href="" class="text-light text-decoration-none">اطلاعات بیشتر</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" fill="#fff"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8">
                        </path>
                    </svg>
                </div>

            </div>


        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
            <div
                class="bg-danger bg-gradient d-flex position-relative overflow-hidden align-items-center justify-content-between  rounded-3 px-3 py-4">
                <div>
                    <h5 class="fw-bold text-light text-nowrap">دوره ها</h5>
                    <span class="text-light fs-3 text-nowrap">10</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="117" height="51" viewBox="0 0 117 51" fill="none">
                        <g filter="url(#filter0_f_3_639)">
                            <circle cx="107" cy="20" r="5" fill="#fff"></circle>
                        </g>
                        <path
                            d="M1 49.5L8.5 26.5L17 37L22 19.5L31 37L44.5 3L57.5 26.5L72 19.5L83.5 31L93.5 6.5L101 19.5H108"
                            stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                        <defs>
                            <filter id="filter0_f_3_639" x="97" y="10" width="20" height="20"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                </feBlend>
                                <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_3_639">
                                </feGaussianBlur>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div class="position-absolute p-1 text-center bg-dark bg-opacity-25 bottom-0 start-0 w-100">
                    <a href="#" class="text-light text-decoration-none">اطلاعات بیشتر</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" fill="#fff"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
            <div
                class="bg-primary bg-gradient d-flex position-relative overflow-hidden align-items-center justify-content-between  rounded-3 px-3 py-4">
                <div>
                    <h5 class="fw-bold text-light text-nowrap">مجموع تیکت ها</h5>
                    <span class="text-light fs-3 text-nowrap">20</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="117" height="51" viewBox="0 0 117 51" fill="none">
                        <g filter="url(#filter0_f_3_639)">
                            <circle cx="107" cy="20" r="5" fill="#fff"></circle>
                        </g>
                        <path
                            d="M1 49.5L8.5 26.5L17 37L22 19.5L31 37L44.5 3L57.5 26.5L72 19.5L83.5 31L93.5 6.5L101 19.5H108"
                            stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                        <defs>
                            <filter id="filter0_f_3_639" x="97" y="10" width="20" height="20"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                </feBlend>
                                <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_3_639">
                                </feGaussianBlur>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div class="position-absolute p-1 text-center bg-dark bg-opacity-25 bottom-0 start-0 w-100">
                    <a href="#" class="text-light text-decoration-none">اطلاعات بیشتر</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" fill="#fff"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
            <div
                class="bg-success bg-gradient d-flex position-relative overflow-hidden align-items-center justify-content-between  rounded-3 px-3 py-4">
                <div>
                    <h5 class="fw-bold text-light text-nowrap">موجودی حساب</h5>
                    <span class="text-light fs-3 text-nowrap">0 تومان</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="117" height="51" viewBox="0 0 117 51" fill="none">
                        <g filter="url(#filter0_f_3_639)">
                            <circle cx="107" cy="20" r="5" fill="#fff"></circle>
                        </g>
                        <path
                            d="M1 49.5L8.5 26.5L17 37L22 19.5L31 37L44.5 3L57.5 26.5L72 19.5L83.5 31L93.5 6.5L101 19.5H108"
                            stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                        <defs>
                            <filter id="filter0_f_3_639" x="97" y="10" width="20" height="20"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                </feBlend>
                                <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_3_639">
                                </feGaussianBlur>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div class="position-absolute p-1 text-center bg-dark bg-opacity-25 bottom-0 start-0 w-100">
                    <a href="#" class="text-light text-decoration-none">اطلاعات بیشتر</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" fill="#fff"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
        <!-- table -->
        <div class="border border-secondary border-opacity-10 rounded-3 mt-4 table-responsive">
            <div class="px-2 border border-secondary border-opacity-10">
                <span class="fw-bold fs-4">وضعیت</span>
            </div>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>دوره</th>
                        <th>مدرس</th>
                        <th>تصویر</th>
                        <th>شروع</th>
                        <th>وضعیت</th>
                        <th>درصد یادگیری</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-nowrap">
                        <td>1</td>
                        <td>بوت استرپ 5</td>
                        <td>ماهان احمدی</td>
                        <td>
                            <img src="../../dashbord/img/user.jpg" class=" rounded-circle" width="32" height="32"
                                alt="">
                        </td>
                        <td>10بهمن</td>
                        <td>
                            <span class="badge bg-success rounded-pill">گذرانده شده</span>
                        </td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: 100%;">100%</div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>جاوا اسکریپت</td>
                        <td>ماهان احمدی</td>
                        <td>
                            <img src="../../dashbord/img/user.jpg" class=" rounded-circle" width="32" height="32"
                                alt="">
                        </td>
                        <td>12 اسفند</td>
                        <td>
                            <span class="badge bg-danger rounded-pill">گذرانده نشده</span>
                        </td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-danger" style="width: 1;">0%</div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>پایتون</td>
                        <td>ماهان احمدی</td>
                        <td>
                            <img src="../../dashbord/img/user.jpg" class=" rounded-circle" width="32" height="32"
                                alt="">
                        </td>
                        <td>11دی</td>
                        <td>
                            <span class="badge bg-warning rounded-pill">درحال یادگیری</span>
                        </td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-warning" style="width: 30%;">30%</div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>سی اس اس</td>
                        <td>ماهان احمدی</td>
                        <td>
                            <img src="../../dashbord/img/user.jpg" class=" rounded-circle" width="32" height="32"
                                alt="">
                        </td>
                        <td>26آذز</td>
                        <td>
                            <span class="badge bg-info rounded-pill">در حال یادگیری</span>
                        </td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-info" style="width: 40%;">40%</div>
                            </div>
                        </td>

                    </tr>

                </tbody>

            </table>
        </div>
        <!-- pagination -->
        <div class="d-flex justify-content-center mt-4">
            <ul class="pagination">
                <li class="page-item">
                    <a href="" class="page-link disabled">قبلی</a>

                </li>
                <li class="page-item">
                    <a href="" class="page-link">1</a>

                </li>
                <li class="page-item">
                    <a href="" class="page-link active">2</a>

                </li>
                <li class="page-item">
                    <a href="" class="page-link">3</a>

                </li>
                <li class="page-item">
                    <a href="" class="page-link">بعدی</a>

                </li>

            </ul>
        </div>
        <!-- form -->
        <div class="border border-secondary border-opacity-10 mt-4">
            <div class="p-2">
                <span class="fw-bold fs-4">اطلاعات کاربر</span>
            </div>
            <form action="" class="row row-gap-4 p-3">
                <div class="col-12 col-sm-6">
                    <div class="">
                        <label for="" class="form-label">نام</label>
                        <input type="text" class="form-control" name="" id="" placeholder="ماهان ">
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="">
                        <label for="" class="form-label">نام خانوادگی</label>
                        <input type="text" class="form-control" name="" id="" placeholder=" احمدی">
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="">
                        <label for="" class="form-label">ایمیل </label>
                        <input type="email" class="form-control" name="" id="" placeholder=" abcde@fgmail.com">
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="">
                        <label for="" class="form-label">شغل </label>
                        <select name="" id="" class="form-select">
                            <option value="" selected>دانشجو</option>
                            <option value="">برنامه نویس</option>
                            <option value="">آزاد</option>
                            <option value="">دیگر</option>

                        </select>


                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="">
                        <label for="" class="form-label">تصویر کاربر </label>
                        <input type="file" class="form-control" name="" id="">
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="">
                        <label for="" class="form-label">سن </label>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                </div>
                <div class="col-12 col-sm-2 ">
                    <button class="btn btn-success w-100">ثبت</button>
                </div>





            </form>
        </div>
    </div>






</template>