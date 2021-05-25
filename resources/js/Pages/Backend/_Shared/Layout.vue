<template>
  <div class="d-flex flex-column flex-root">
    <!--begin::Page-->
    <div class="page d-flex flex-row flex-column-fluid">
      <!--begin::Aside-->
      <div
        id="kt_aside"
        class="aside aside-dark aside-hoverable"
        data-kt-drawer="true"
        data-kt-drawer-name="aside"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'200px', '300px': '250px'}"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_aside_mobile_toggle"
      >
        <!--begin::Brand-->
        <div class="aside-logo flex-column-auto" id="kt_aside_logo">
          <!--begin::Logo-->
          <a href="index.html">
            <img
              alt="Logo"
              src="assets/media/logos/logo-default.svg"
              class="h-15px logo"
            />
          </a>
          <!--end::Logo-->
          <!--begin::Aside toggler-->
          <div
            id="kt_aside_toggle"
            class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="aside-minimize"
          >
            <!--begin::Svg Icon | path: icons/duotone/Navigation/Angle-double-left.svg-->
            <span class="svg-icon svg-icon-1 rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                    fill="#000000"
                    fill-rule="nonzero"
                    transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)"
                  />
                  <path
                    d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                    fill="#000000"
                    fill-rule="nonzero"
                    opacity="0.5"
                    transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)"
                  />
                </g>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Aside toggler-->
        </div>
        <!--end::Brand-->
        <!--begin::Aside menu-->
        <div class="aside-menu flex-column-fluid">
          <!--begin::Aside Menu-->
          <div
            class="hover-scroll-overlay-y my-2 py-5 py-lg-8"
            id="kt_aside_menu_wrapper"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
            data-kt-scroll-wrappers="#kt_aside_menu"
            data-kt-scroll-offset="0"
          >
            <!--begin::Menu-->
            <div
              class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
              id="#kt_aside_menu"
              data-kt-menu="true"
            >
              <div class="menu-item">
                <inertia-link class="menu-link active" href="/">
                  <span class="menu-icon">
                    <i class="bi bi-house fs-3"></i>
                  </span>
                  <span class="menu-title">Dashboard</span>
                </inertia-link>
              </div>
              <div class="menu-item">
                <inertia-link class="menu-link" href="/landing">
                  <span class="menu-icon">
                    <i class="bi bi-app-indicator fs-3"></i>
                  </span>
                  <span class="menu-title">Landing</span>
                </inertia-link>
              </div>
            </div>
            <!--end::Menu-->
          </div>
        </div>
        <!--end::Aside menu-->
        <!--begin::Footer-->

        <!--end::Footer-->
      </div>
      <!--end::Aside-->
      <!--begin::Wrapper-->
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <!--begin::Header-->
        <div id="kt_header" style="" class="header align-items-stretch">
          <!--begin::Container-->
          <div
            class="container-fluid d-flex align-items-stretch justify-content-between"
          >
            <!--begin::Aside mobile toggle-->
            <div
              class="d-flex align-items-center d-lg-none ms-n3 me-1"
              title="Show aside menu"
            >
              <div
                class="btn btn-icon btn-active-color-white"
                id="kt_aside_mobile_toggle"
              >
                <i class="bi bi-list fs-1"></i>
              </div>
            </div>
            <!--end::Aside mobile toggle-->
            <!--begin::Mobile logo-->
            <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
              <a href="index.html" class="d-lg-none">
                <img
                  alt="Logo"
                  src="assets/media/logos/logo-compact.svg"
                  class="h-30px"
                />
              </a>
            </div>
            <!--end::Mobile logo-->
            <!--begin::Wrapper-->
            <div
              class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
            >
              <!--begin::Navbar-->
              <div class="d-flex align-items-stretch" id="kt_header_nav">
                <!--begin::Menu wrapper-->
                <div
                  class="header-menu align-items-stretch"
                  data-kt-drawer="true"
                  data-kt-drawer-name="header-menu"
                  data-kt-drawer-activate="{default: true, lg: false}"
                  data-kt-drawer-overlay="true"
                  data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                  data-kt-drawer-direction="end"
                  data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
                  data-kt-place="true"
                  data-kt-place-mode="prepend"
                  data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
                >
                  <!--begin::Menu-->

                  <!--end::Menu-->
                </div>
                <!--end::Menu wrapper-->
              </div>
              <!--end::Navbar-->
              <!--begin::Topbar-->
              <div class="d-flex align-items-stretch flex-shrink-0">
                <!--begin::Toolbar wrapper-->
                <div class="topbar d-flex align-items-stretch flex-shrink-0">
                  <!--begin::User-->
                  <div
                    class="d-flex align-items-stretch"
                    id="kt_header_user_menu_toggle"
                  >
                    <!--begin::Menu wrapper-->
                    <div
                      class="topbar-item cursor-pointer symbol px-3 px-lg-5 me-n3 me-lg-n5 symbol-30px symbol-md-35px"
                      data-kt-menu-trigger="click"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-flip="bottom"
                    >
                      <img
                        src="assets/media/avatars/150-2.jpg"
                        alt="metronic"
                      />
                    </div>
                    <!--begin::Menu-->
                    <div
                      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px"
                      data-kt-menu="true"
                    >
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <div
                          class="menu-content d-flex align-items-center px-3"
                        >
                          <!--begin::Avatar-->
                          <div class="symbol symbol-50px me-5">
                            <img
                              alt="Logo"
                              src="assets/media/avatars/150-2.jpg"
                            />
                          </div>
                          <!--end::Avatar-->
                          <!--begin::Username-->
                          <div class="d-flex flex-column">
                            <div
                              class="fw-bolder d-flex align-items-center fs-5"
                            >
                              Max Smith
                              <span
                                class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2"
                                >Pro</span
                              >
                            </div>
                            <a
                              href="#"
                              class="fw-bold text-muted text-hover-primary fs-7"
                              >max@kt.com</a
                            >
                          </div>
                          <!--end::Username-->
                        </div>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu separator-->
                      <div class="separator my-2"></div>
                      <!--end::Menu separator-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-5">
                        <a href="account/overview.html" class="menu-link px-5"
                          >My Profile</a
                        >
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-5">
                        <a
                          href="pages/projects/list.html"
                          class="menu-link px-5"
                        >
                          <span class="menu-text">My Projects</span>
                          <span class="menu-badge">
                            <span
                              class="badge badge-light-danger badge-circle fw-bolder fs-7"
                              >3</span
                            >
                          </span>
                        </a>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div
                        class="menu-item px-5"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                        data-kt-menu-flip="bottom"
                      >
                        <a href="#" class="menu-link px-5">
                          <span class="menu-title">My Subscription</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <!--begin::Menu sub-->
                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/referrals.html"
                              class="menu-link px-5"
                              >Referrals</a
                            >
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/billing.html"
                              class="menu-link px-5"
                              >Billing</a
                            >
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/statements.html"
                              class="menu-link px-5"
                              >Payments</a
                            >
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/statements.html"
                              class="menu-link d-flex flex-stack px-5"
                              >Statements
                              <i
                                class="fas fa-exclamation-circle ms-2 fs-7"
                                data-bs-toggle="tooltip"
                                title="View your statements"
                              ></i
                            ></a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu separator-->
                          <div class="separator my-2"></div>
                          <!--end::Menu separator-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <div class="menu-content px-3">
                              <label
                                class="form-check form-switch form-check-custom form-check-solid"
                              >
                                <input
                                  class="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  value="1"
                                  checked="checked"
                                  name="notifications"
                                />
                                <span class="form-check-label text-muted fs-7"
                                  >Notifications</span
                                >
                              </label>
                            </div>
                          </div>
                          <!--end::Menu item-->
                        </div>
                        <!--end::Menu sub-->
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-5">
                        <a href="account/statements.html" class="menu-link px-5"
                          >My Statements</a
                        >
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu separator-->
                      <div class="separator my-2"></div>
                      <!--end::Menu separator-->
                      <!--begin::Menu item-->
                      <div
                        class="menu-item px-5"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="left-start"
                        data-kt-menu-flip="bottom"
                      >
                        <a href="#" class="menu-link px-5">
                          <span class="menu-title position-relative"
                            >Language
                            <span
                              class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0"
                              >English
                              <img
                                class="w-15px h-15px rounded-1 ms-2"
                                src="assets/media/flags/united-states.svg"
                                alt="metronic" /></span
                          ></span>
                        </a>
                        <!--begin::Menu sub-->
                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/settings.html"
                              class="menu-link d-flex px-5 active"
                            >
                              <span class="symbol symbol-20px me-4">
                                <img
                                  class="rounded-1"
                                  src="assets/media/flags/united-states.svg"
                                  alt="metronic"
                                /> </span
                              >English</a
                            >
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/settings.html"
                              class="menu-link d-flex px-5"
                            >
                              <span class="symbol symbol-20px me-4">
                                <img
                                  class="rounded-1"
                                  src="assets/media/flags/spain.svg"
                                  alt="metronic"
                                /> </span
                              >Spanish</a
                            >
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/settings.html"
                              class="menu-link d-flex px-5"
                            >
                              <span class="symbol symbol-20px me-4">
                                <img
                                  class="rounded-1"
                                  src="assets/media/flags/germany.svg"
                                  alt="metronic"
                                /> </span
                              >German</a
                            >
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/settings.html"
                              class="menu-link d-flex px-5"
                            >
                              <span class="symbol symbol-20px me-4">
                                <img
                                  class="rounded-1"
                                  src="assets/media/flags/japan.svg"
                                  alt="metronic"
                                /> </span
                              >Japanese</a
                            >
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a
                              href="account/settings.html"
                              class="menu-link d-flex px-5"
                            >
                              <span class="symbol symbol-20px me-4">
                                <img
                                  class="rounded-1"
                                  src="assets/media/flags/france.svg"
                                  alt="metronic"
                                /> </span
                              >French</a
                            >
                          </div>
                          <!--end::Menu item-->
                        </div>
                        <!--end::Menu sub-->
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-5 my-1">
                        <a href="account/settings.html" class="menu-link px-5"
                          >Account Settings</a
                        >
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-5">
                        <a
                          href="authentication/flows/basic/sign-in.html"
                          class="menu-link px-5"
                          >Sign Out</a
                        >
                      </div>
                      <!--end::Menu item-->
                    </div>
                    <!--end::Menu-->
                    <!--end::Menu wrapper-->
                  </div>
                  <!--end::User -->
                  <!--begin::Heaeder menu toggle-->
                  <div
                    class="d-flex align-items-stretch d-lg-none px-3 me-n3"
                    title="Show header menu"
                  >
                    <div class="topbar-item" id="kt_header_menu_mobile_toggle">
                      <i class="bi bi-text-left fs-1"></i>
                    </div>
                  </div>
                  <!--end::Heaeder menu toggle-->
                </div>
                <!--end::Toolbar wrapper-->
              </div>
              <!--end::Topbar-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::Header-->
        <!--begin::Content-->
        <div
          class="content d-flex flex-column flex-column-fluid"
          id="kt_content"
        >
          <!--begin::Toolbar-->
          <div class="toolbar" id="kt_toolbar">
            <!--begin::Container-->
            <div
              id="kt_toolbar_container"
              class="container-fluid d-flex flex-stack"
            >
              <!--begin::Page title-->
              <div
                data-kt-place="true"
                data-kt-place-mode="prepend"
                data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                class="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1"
              >
                <!--begin::Title-->
                <h1
                  class="d-flex align-items-center text-dark fw-bolder my-1 fs-3"
                >
                  Dashboard
                  <!--begin::Separator-->
                  <span
                    class="h-20px border-gray-200 border-start ms-3 mx-2"
                  ></span>
                  <!--end::Separator-->
                  <!--begin::Description-->
                  <small class="text-muted fs-7 fw-bold my-1 ms-1"
                    >#XRS-45670</small
                  >
                  <!--end::Description-->
                </h1>
                <!--end::Title-->
              </div>
              <!--end::Page title-->
              <!--begin::Actions-->
              <div class="d-flex align-items-center py-1">
                <!--begin::Wrapper-->
                <div class="me-4">
                  <!--begin::Menu-->
                  <a
                    href="#"
                    class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    data-kt-menu-flip="top-end"
                  >
                    <!--begin::Svg Icon | path: icons/duotone/Text/Filter.svg-->
                    <span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <path
                            d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z"
                            fill="#000000"
                          />
                        </g>
                      </svg>
                    </span>
                    <!--end::Svg Icon-->Filter</a
                  >
                  <!--begin::Menu 1-->
                  <div
                    class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                    data-kt-menu="true"
                  >
                    <!--begin::Header-->
                    <div class="px-7 py-5">
                      <div class="fs-5 text-dark fw-bolder">Filter Options</div>
                    </div>
                    <!--end::Header-->
                    <!--begin::Menu separator-->
                    <div class="separator border-gray-200"></div>
                    <!--end::Menu separator-->
                    <!--begin::Form-->
                    <div class="px-7 py-5">
                      <!--begin::Input group-->
                      <div class="mb-10">
                        <!--begin::Label-->
                        <label class="form-label fw-bold">Status:</label>
                        <!--end::Label-->
                        <!--begin::Input-->
                        <div>
                          <select
                            class="form-select form-select-solid"
                            data-kt-select2="true"
                            data-placeholder="Select option"
                            data-allow-clear="true"
                          >
                            <option></option>
                            <option value="1">Approved</option>
                            <option value="2">Pending</option>
                            <option value="2">In Process</option>
                            <option value="2">Rejected</option>
                          </select>
                        </div>
                        <!--end::Input-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div class="mb-10">
                        <!--begin::Label-->
                        <label class="form-label fw-bold">Member Type:</label>
                        <!--end::Label-->
                        <!--begin::Options-->
                        <div class="d-flex">
                          <!--begin::Options-->
                          <label
                            class="form-check form-check-sm form-check-custom form-check-solid me-5"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                            />
                            <span class="form-check-label">Author</span>
                          </label>
                          <!--end::Options-->
                          <!--begin::Options-->
                          <label
                            class="form-check form-check-sm form-check-custom form-check-solid"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="2"
                              checked="checked"
                            />
                            <span class="form-check-label">Customer</span>
                          </label>
                          <!--end::Options-->
                        </div>
                        <!--end::Options-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div class="mb-10">
                        <!--begin::Label-->
                        <label class="form-label fw-bold">Notifications:</label>
                        <!--end::Label-->
                        <!--begin::Switch-->
                        <div
                          class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            name="notifications"
                            checked="checked"
                          />
                          <label class="form-check-label">Enabled</label>
                        </div>
                        <!--end::Switch-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Actions-->
                      <div class="d-flex justify-content-end">
                        <button
                          type="reset"
                          class="btn btn-sm btn-white btn-active-light-primary me-2"
                          data-kt-menu-dismiss="true"
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          class="btn btn-sm btn-primary"
                          data-kt-menu-dismiss="true"
                        >
                          Apply
                        </button>
                      </div>
                      <!--end::Actions-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Menu 1-->
                  <!--end::Menu-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Button-->
                <a
                  href="#"
                  class="btn btn-sm btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_app"
                  id="kt_toolbar_primary_button"
                  >Create</a
                >
                <!--end::Button-->
              </div>
              <!--end::Actions-->
            </div>
            <!--end::Container-->
          </div>
          <!--end::Toolbar-->
          <!--begin::Post-->
          <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <slot/>
            <!--end::Container-->
          </div>
          <!--end::Post-->
        </div>
        <!--end::Content-->
        <!--begin::Footer-->
        <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
          <!--begin::Container-->
          <div
            class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between"
          >
            <!--begin::Copyright-->
            <div class="text-dark order-2 order-md-1">
              <span class="text-muted fw-bold me-1">2021©</span>
              <a
                href=""
                target="_blank"
                class="text-gray-800 text-hover-primary"
                >Keenthemes</a
              >
            </div>
            <!--end::Copyright-->
            <!--begin::Menu-->
            <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
              <li class="menu-item">
                <a
                  href="https://keenthemes.com/faqs"
                  target="_blank"
                  class="menu-link px-2"
                  >About</a
                >
              </li>
              <li class="menu-item">
                <a
                  href="https://keenthemes.com/support"
                  target="_blank"
                  class="menu-link px-2"
                  >Support</a
                >
              </li>
              <li class="menu-item">
                <a
                  href="https://1.envato.market/EA4JP"
                  target="_blank"
                  class="menu-link px-2"
                  >Purchase</a
                >
              </li>
            </ul>
            <!--end::Menu-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::Footer-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
</template>
<script>
export default {
  created() {
    console.log("Created");
  },
};

//

// let myScript = document.createElement("script");
// myScript.setAttribute(
//   "src",
//   "http://127.0.0.1:8000/assets/plugins/global/plugins.bundle.js"
// );
// myScript.setAttribute(
//   "src",
//   "http://127.0.0.1:8000/assets/js/scripts.bundle.js"
// );
// document.body.appendChild(myScript);
// myScript.addEventListener("load", scriptLoaded, false);

// function scriptLoaded() {
//   console.log("Script is ready to rock and roll!");
// }
</script>

<style>
</style>
