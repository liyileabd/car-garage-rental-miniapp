const screens = document.querySelectorAll("[data-screen]");
    const tabButtons = document.querySelectorAll("[data-tab]");
    const loginActions = document.querySelectorAll("[data-login-action]");
    const quickLoginButtons = document.querySelectorAll("[data-quick-login]");
    const openSmsButtons = document.querySelectorAll("[data-open-sms]");
    const loginPhoneInputs = document.querySelectorAll("[data-login-phone]");
    const loginCodeInputs = document.querySelectorAll("[data-login-code]");
    const loginCodeActions = document.querySelectorAll("[data-login-code-action]");
    const agreementToggles = document.querySelectorAll("[data-agreement-toggle]");
    const loginViews = document.querySelectorAll("[data-login-view]");
    const homeLoginActions = document.querySelectorAll("[data-home-login-action]");
    const personalLoginActions = document.querySelectorAll("[data-personal-login-action]");
    const personalInfoActions = document.querySelectorAll("[data-personal-info-action]");
    const personalInfoBackButtons = document.querySelectorAll("[data-personal-info-back]");
    const aboutActions = document.querySelectorAll("[data-about-action]");
    const settingsActions = document.querySelectorAll("[data-settings-action]");
    const accountManageActions = document.querySelectorAll("[data-account-manage-action]");
    const aboutBackButtons = document.querySelectorAll("[data-about-back]");
    const settingsBackButtons = document.querySelectorAll("[data-settings-back]");
    const accountManageBackButtons = document.querySelectorAll("[data-account-manage-back]");
    const accountManagePage = document.querySelector(".account-manage-page");
    const accountDeleteAction = document.querySelector("[data-account-delete-action]");
    const accountDeleteCloseActions = document.querySelectorAll("[data-account-delete-close]");
    const accountDeleteConfirmAction = document.querySelector("[data-account-delete-confirm]");
    const policyActions = document.querySelectorAll("[data-policy-action]");
    const personalNicknameInput = document.querySelector("[data-personal-nickname-input]");
    const personalNameInput = document.querySelector("[data-personal-name-input]");
    const personalPhoneInput = document.querySelector("[data-personal-phone-input]");
    const personalIdInput = document.querySelector("[data-personal-id-input]");
    const personalAvatarAction = document.querySelector("[data-personal-avatar-action]");
    const personalAvatarFileInput = document.querySelector("[data-personal-avatar-file]");
    const profileAvatarSlots = document.querySelectorAll("[data-profile-avatar]");
    const personalInfoSaveButton = document.querySelector("[data-personal-info-save]");
    const authedNameLabels = document.querySelectorAll(".authed-name");
    const authedPhoneLabels = document.querySelectorAll(".authed-phone");
    const backHomeButtons = document.querySelectorAll("[data-back-home]");
    const logoutAction = document.querySelector("[data-logout-action]");
    const cityActions = document.querySelectorAll("[data-city-action]");
    const searchActions = document.querySelectorAll("[data-search-action]");
    const rentFlowActions = document.querySelectorAll("[data-rent-flow-action]");
    const homeRentActions = document.querySelectorAll(".home-garage-list .garage-card:not(.full) .rent-button");
    const rentGarageQuery = document.querySelector("[data-rent-garage-query]");
    const rentAreaButtons = document.querySelectorAll("[data-rent-area]");
    const rentFlowBackActions = document.querySelectorAll("[data-rent-flow-back]");
    const rentOwnerBackActions = document.querySelectorAll("[data-rent-owner-back]");
    const rentOwnerNextButton = document.querySelector("[data-rent-owner-next]");
    const rentOwnerNameInput = document.querySelector("[data-rent-owner-name]");
    const rentOwnerPhoneInput = document.querySelector("[data-rent-owner-phone]");
    const rentOwnerIdCardInput = document.querySelector("[data-rent-owner-id-card]");
    const rentPrereqPersonal = document.querySelector("[data-rent-prereq-personal]");
    const rentPrereqFooter = document.querySelector("[data-rent-prereq-footer]");
    const rentVehicleNextButton = document.querySelector("[data-rent-vehicle-next]");
    const rentVehiclePickerAction = document.querySelector("[data-open-rent-vehicle-picker]");
    const rentVehiclePickerBackActions = document.querySelectorAll("[data-rent-vehicle-picker-back]");
    const rentNoticeBackActions = document.querySelectorAll("[data-rent-notice-back]");
    const rentStartDateInput = document.querySelector("[data-rent-start-date]");
    const rentStartDateDisplay = document.querySelector("[data-rent-start-date-display]");
    const rentDatePickerOpenAction = document.querySelector("[data-open-rent-date-picker]");
    const rentDatePickerSheet = document.querySelector("[data-rent-date-sheet]");
    const rentDatePickerCancelAction = document.querySelector("[data-rent-date-cancel]");
    const rentDatePickerConfirmAction = document.querySelector("[data-rent-date-confirm]");
    const rentDateColumns = document.querySelector("[data-rent-date-columns]");
    const rentDateYearList = document.querySelector("[data-rent-date-year-list]");
    const rentDateMonthList = document.querySelector("[data-rent-date-month-list]");
    const rentDateDayList = document.querySelector("[data-rent-date-day-list]");
    const rentOverlapDialog = document.querySelector("[data-rent-overlap-dialog]");
    const rentOverlapMessage = document.querySelector("[data-rent-overlap-message]");
    const rentOverlapCloseActions = document.querySelectorAll("[data-rent-overlap-close]");
    const rentMonthsInput = document.querySelector("[data-rent-months]");
    const rentMonthOptions = document.querySelectorAll("[data-rent-month-option]");
    const rentEndDateLabel = document.querySelector("[data-rent-end-date]");
    const rentNoticeNextButton = document.querySelector("[data-rent-notice-next]");
    const rentNoticeAgreementAction = document.querySelector("[data-rent-notice-agreement]");
    const rentNoticePages = document.querySelectorAll("[data-rent-notice-page]");
    const rentNoticePreviousPageButton = document.querySelector("[data-rent-notice-prev]");
    const rentNoticeNextPageButton = document.querySelector("[data-rent-notice-next-page]");
    const rentNoticePageDots = document.querySelectorAll("[data-rent-notice-page-dot]");
    const rentNoticePageStatus = document.querySelector("[data-rent-notice-page-status]");
    const rentTermPrice = document.querySelector("[data-rent-term-price]");
    const rentCancelPaymentButton = document.querySelector("[data-rent-cancel-payment]");
    const rentSubmitButton = document.querySelector("[data-rent-submit]");
    const homeRentCard = document.querySelector(".home .rent-card");
    const homeRentActive = document.querySelector("[data-home-rent-active]");
    const homeRentEmpty = document.querySelector("[data-home-rent-empty]");
    const homeRentStatus = document.querySelector("[data-home-rent-status]");
    const homeRentPlate = document.querySelector("[data-home-rent-plate]");
    const homeRentPlace = document.querySelector("[data-home-rent-place]");
    const homeRentRenew = document.querySelector("[data-home-rent-renew]");
    const homeRentRemaining = document.querySelector("[data-home-rent-remaining]");
    const homeRentEnd = document.querySelector("[data-home-rent-end]");
    const rentSelectedName = document.querySelector("[data-rent-selected-name]");
    const rentSelectedPrice = document.querySelector("[data-rent-selected-price]");
    const rentSelectedVehicles = document.querySelector("[data-rent-selected-vehicles]");
    const rentSelectedCount = document.querySelector("[data-rent-selected-count]");
    const rentVehicleSelectPage = document.querySelector(".rent-vehicle-select-page");
    const rentVehiclePickerComplete = document.querySelector("[data-rent-vehicle-picker-complete]");
    const getRentVehicleOptions = () => Array.from(document.querySelectorAll("[data-rent-vehicle-option]"))
      .filter((option) => option.dataset.account === accountState.current);
    const rentOwnerGarageName = document.querySelector("[data-rent-owner-garage-name]");
    const confirmGarage = document.querySelector("[data-confirm-garage]");
    const confirmVehicles = document.querySelector("[data-confirm-vehicles]");
    const confirmStart = document.querySelector("[data-confirm-start]");
    const confirmEnd = document.querySelector("[data-confirm-end]");
    const confirmMonths = document.querySelector("[data-confirm-months]");
    const confirmPrice = document.querySelector("[data-confirm-price]");
    const confirmNotice = document.querySelector("[data-confirm-notice]");
    const currentCityLabels = document.querySelectorAll("[data-current-city]");
    const cityOptions = document.querySelectorAll("[data-select-city]");
    const refreshCityButton = document.querySelector("[data-refresh-city]");
    const garageQuery = document.querySelector("[data-garage-query]");
    const searchKeywordButtons = document.querySelectorAll("[data-search-keyword]");
    const garageSearchScreen = document.querySelector(".garage-search");
    const searchResults = document.querySelectorAll("[data-search-result]");
    const garageSelectActions = document.querySelectorAll("[data-select-garage]");
    const garageMoreActions = document.querySelectorAll("[data-garage-more]");
    const homeGarageList = document.querySelector(".home-garage-list");
    const fullGarageList = document.querySelector("[data-full-garage-list]");
    const rentGarageList = document.querySelector("[data-rent-garage-list]");
    const garageListPage = document.querySelector(".garage-list-page");
    const garageFilterButtons = document.querySelectorAll("[data-garage-filter]");
    const garageSortButtons = document.querySelectorAll("[data-garage-sort]");
    const vehicleManageActions = document.querySelectorAll("[data-vehicle-manage-action]");
    const vehicleManageBackButtons = document.querySelectorAll("[data-vehicle-manage-back]");
    const vehicleFormBackButtons = document.querySelectorAll("[data-vehicle-form-back]");
    const vehicleFormOpenButtons = document.querySelectorAll("[data-open-vehicle-form]");
    const vehicleManageScreen = document.querySelector(".vehicle-manage");
    const vehicleList = document.querySelector("[data-vehicle-list]");
    const personalVehicleCount = document.querySelector("[data-personal-vehicle-count]");
    const vehicleForm = document.querySelector(".vehicle-form");
    const rentVehicleProfileSection = document.querySelector("[data-rent-vehicle-profile-section]");
    const rentVehicleProfileNameInput = document.querySelector("[data-rent-vehicle-profile-name]");
    const rentVehicleProfilePhoneInput = document.querySelector("[data-rent-vehicle-profile-phone]");
    const rentVehicleProfileIdCardInput = document.querySelector("[data-rent-vehicle-profile-id-card]");
    const rentVehicleBindHeading = document.querySelector("[data-rent-vehicle-bind-heading]");
    const vehiclePlateInput = document.querySelector("[data-vehicle-plate-input]");
    const vehiclePlateShell = document.querySelector("[data-plate-input-shell]");
    const plateCharacterButtons = document.querySelectorAll("[data-plate-character]");
    const plateCharacterValues = document.querySelectorAll("[data-plate-character-value]");
    const plateTailCells = document.querySelectorAll("[data-plate-tail-cell]");
    const plateKeyboard = document.querySelector(".plate-keyboard");
    const plateKeyboardKeys = document.querySelector("[data-plate-keyboard-keys]");
    const plateKeyboardTitle = document.querySelector("[data-plate-keyboard-title]");
    const plateKeyboardCount = document.querySelector("[data-plate-keyboard-count]");
    const vehicleAppearanceInput = document.querySelector("[data-vehicle-appearance-input]");
    const plateColorSheetAction = document.querySelector("[data-open-plate-color-sheet]");
    const plateColorSheet = document.querySelector("[data-plate-color-sheet]");
    const plateColorLabel = document.querySelector("[data-plate-color-label]");
    const plateColorDot = document.querySelector("[data-plate-color-dot]");
    const vehiclePlateColorButtons = document.querySelectorAll("[data-vehicle-plate-color]");
    const vehicleGradeButtons = document.querySelectorAll("[data-vehicle-grade]");
    const vehiclePhotoGrid = document.querySelector("[data-vehicle-photo-grid]");
    const vehiclePhotoCount = document.querySelector("[data-vehicle-photo-count]");
    const vehiclePhotoPreview = document.querySelector("[data-vehicle-photo-preview]");
    const vehiclePhotoPreviewImage = document.querySelector("[data-vehicle-photo-preview-image]");
    const vehiclePhotoPreviewLabel = document.querySelector("[data-vehicle-photo-preview-label]");
    const vehicleClaimDialog = document.querySelector("[data-vehicle-claim-overlay]");
    const vehicleClaimPlate = document.querySelector("[data-vehicle-claim-plate]");
    const vehicleClaimTitle = document.querySelector("[data-vehicle-claim-title]");
    const vehicleClaimMessage = document.querySelector("[data-vehicle-claim-message]");
    const vehicleClaimSecondary = document.querySelector("[data-vehicle-claim-secondary]");
    const vehicleClaimPrimary = document.querySelector("[data-vehicle-claim-primary]");
    const vehicleUnbindButton = document.querySelector("[data-unbind-vehicle]");
    const vehicleSaveButton = document.querySelector("[data-save-vehicle]");
    const vehicleLockedMessage = document.querySelector("[data-vehicle-locked-message]");
    const vehicleSwapSourceBackActions = document.querySelectorAll("[data-vehicle-swap-source-back]");
    const vehicleSwapBackActions = document.querySelectorAll("[data-vehicle-swap-back]");
    const vehicleSwapPickerBackActions = document.querySelectorAll("[data-vehicle-swap-picker-back]");
    const vehicleSwapSourceOptions = document.querySelector("[data-vehicle-swap-source-options]");
    const vehicleSwapCommunity = document.querySelector("[data-vehicle-swap-community]");
    const vehicleSwapTerm = document.querySelector("[data-vehicle-swap-term]");
    const vehicleSwapFrom = document.querySelector("[data-vehicle-swap-from]");
    const vehicleSwapFromRow = document.querySelector("[data-vehicle-swap-from-row]");
    const vehicleSwapTargetSection = document.querySelector("[data-vehicle-swap-target-section]");
    const vehicleSwapTargetHeading = document.querySelector("[data-vehicle-swap-target-heading]");
    const vehicleSwapTargetPicker = document.querySelector("[data-open-vehicle-swap-picker]");
    const vehicleSwapTargetPlate = document.querySelector("[data-vehicle-swap-target-plate]");
    const vehicleSwapTargetColor = document.querySelector("[data-vehicle-swap-target-color]");
    const vehicleSwapUnbindAction = document.querySelector("[data-vehicle-swap-unbind]");
    const vehicleSwapUnbindNote = document.querySelector("[data-vehicle-swap-unbind-note]");
    const vehicleSwapOptions = document.querySelector("[data-vehicle-swap-options]");
    const vehicleSwapEmpty = document.querySelector("[data-vehicle-swap-empty]");
    const vehicleSwapFooter = document.querySelector("[data-vehicle-swap-footer]");
    const vehicleSwapSubmit = document.querySelector("[data-vehicle-swap-submit]");
    const vehicleSwapPickerTitle = document.querySelector("[data-vehicle-swap-picker-title]");
    const vehicleFormTitle = document.querySelector("[data-vehicle-form-title]");
    const garageMapBackButtons = document.querySelectorAll("[data-garage-map-back]");
    const mapGarageNames = document.querySelectorAll("[data-map-garage-name], [data-map-garage-title]");
    const mapGarageLocation = document.querySelector("[data-map-garage-location]");
    const mapGarageDistance = document.querySelector("[data-map-garage-distance]");
    const mapNavigateButton = document.querySelector("[data-map-navigate]");
    const orderListActions = document.querySelectorAll("[data-order-list-action]");
    const orderOpenButtons = document.querySelectorAll("[data-order-open-id]");
    const orderListBackButtons = document.querySelectorAll("[data-order-list-back]");
    const orderDetailBackButtons = document.querySelectorAll("[data-order-detail-back]");
    const orderWorkflowBackButtons = document.querySelectorAll("[data-order-workflow-back]");
    const orderFilterButtons = document.querySelectorAll("[data-order-filter]");
    const orderSubTabs = document.querySelector("[data-order-subtabs]");
    const orderList = document.querySelector("[data-order-list]");
    const orderListScreen = document.querySelector(".order-list-page");
    const orderDetailContent = document.querySelector("[data-order-detail-content]");
    const orderDetailFooter = document.querySelector("[data-order-detail-footer]");
    const renewMonthsInput = document.querySelector("[data-renew-months]");
    const renewMonthButtons = document.querySelectorAll("[data-renew-month]");
    const renewCommunity = document.querySelector("[data-renew-community]");
    const renewPlate = document.querySelector("[data-renew-plate]");
    const renewStart = document.querySelector("[data-renew-start]");
    const renewEnd = document.querySelector("[data-renew-end]");
    const renewAmount = document.querySelector("[data-renew-amount]");
    const refundReasonButtons = document.querySelectorAll("[data-refund-reason]");
    const refundNote = document.querySelector("[data-refund-note]");
    const refundAccountOpenButton = document.querySelector("[data-refund-account-open]");
    const refundAccountSummary = document.querySelector("[data-refund-account-summary]");
    const refundAccountPayer = document.querySelector("[data-refund-account-payer]");
    const refundBankInput = document.querySelector("[data-refund-bank-input]");
    const refundBankAccountInput = document.querySelector("[data-refund-bank-account-input]");
    const refundAccountPhoneInput = document.querySelector("[data-refund-account-phone-input]");
    const refundAccountBackButton = document.querySelector("[data-refund-account-back]");
    const refundAccountSaveButton = document.querySelector("[data-refund-account-save]");
    const invoiceTypeButtons = document.querySelectorAll("[data-invoice-type]");
    const invoicePersonalFields = document.querySelector("[data-invoice-personal-fields]");
    const invoiceCompanyFields = document.querySelector("[data-invoice-company-fields]");
    const invoiceCompanyTitle = document.querySelector("[data-invoice-company-title]");
    const invoiceCompanyTip = document.querySelector("[data-invoice-company-tip]");
    const invoiceCompanyInputs = document.querySelectorAll("[data-invoice-company-field]");
    const invoiceSpecialRequiredMarks = document.querySelectorAll("[data-invoice-special-required]");
    const invoiceVatSection = document.querySelector("[data-invoice-vat-section]");
    const invoiceNontaxSection = document.querySelector("[data-invoice-nontax-section]");
    const invoiceSummaryTitle = document.querySelector("[data-invoice-summary-title]");
    const invoiceContentLabel = document.querySelector("[data-invoice-content-label]");
    const invoiceAmountLabel = document.querySelector("[data-invoice-amount-label]");
    const invoiceVoucherType = document.querySelector("[data-invoice-voucher-type]");
    const invoiceSystemAmount = document.querySelector("[data-invoice-system-amount]");
    const invoicePersonalName = document.querySelector("[data-invoice-personal-name]");
    const invoicePhone = document.querySelector("[data-invoice-phone]");
    const invoiceNontaxName = document.querySelector("[data-invoice-nontax-name]");
    const invoiceNontaxPhone = document.querySelector("[data-invoice-nontax-phone]");
    const invoiceScreenLabel = document.querySelector("[data-invoice-screen-label]");
    const invoicePage = document.querySelector("[data-invoice-page]");
    const invoicePageTitle = document.querySelector("[data-invoice-page-title]");
    const invoiceSubmitButton = document.querySelector("[data-invoice-submit]");
    const invoiceListActions = document.querySelectorAll("[data-invoice-list-action]");
    const invoiceListBackButtons = document.querySelectorAll("[data-invoice-list-back]");
    const invoiceResultBackButtons = document.querySelectorAll("[data-invoice-result-back]");
    const invoiceFilterButtons = document.querySelectorAll("[data-invoice-filter]");
    const invoiceTypeFilterButtons = document.querySelectorAll("[data-invoice-type-filter]");
    const invoiceRecordList = document.querySelector("[data-invoice-record-list]");
    const invoiceListScreen = document.querySelector(".invoice-list-page");
    const invoiceResultDetail = document.querySelector("[data-invoice-result-detail]");
    const invoiceResultFile = document.querySelector("[data-invoice-result-file]");
    const invoiceResultScreenLabel = document.querySelector("[data-invoice-result-screen-label]");
    const invoiceResultPage = document.querySelector("[data-invoice-result-page]");
    const invoiceResultTitle = document.querySelector("[data-invoice-result-title]");
    const refundListActions = document.querySelectorAll("[data-refund-list-action]");
    const refundListBackButtons = document.querySelectorAll("[data-refund-list-back]");
    const refundDetailBackButtons = document.querySelectorAll("[data-refund-detail-back]");
    const refundFilterButtons = document.querySelectorAll("[data-refund-filter]");
    const refundRecordList = document.querySelector("[data-refund-record-list]");
    const refundListScreen = document.querySelector(".refund-list-page");
    const refundDetailContent = document.querySelector("[data-refund-detail-content]");
    const refundDetailFooter = document.querySelector("[data-refund-detail-footer]");
    const garageListState = {
      filter: "all",
      sort: "distance",
    };
    const rentFlowState = {
      selectedName: "",
      selectedCommunity: "",
      selectedGarage: "",
      selectedLocation: "",
      selectedPrice: 0,
      selectedCommunityId: "",
      selectedProjectName: "",
      selectedProjectType: "",
    };
    const communityCatalog = [
      {
        id: "COMMUNITY-001",
        communityName: "银霞花园一期",
        projectName: "美仑花园安置房一期（银霞花园一期）",
        projectType: "公司自营项目",
        district: "湖里区",
        street: "湖里街道",
        garageName: "地下停车场",
        distance: 1.2,
        totalSpaces: 120,
        rentedSpaces: 92,
        monthlyPrice: 300,
      },
      {
        id: "COMMUNITY-002",
        communityName: "金林湾花园B区",
        projectName: "金林湾花园B区1-07地块安置房（金林湾花园B区）",
        projectType: "区财政代管项目",
        district: "湖里区",
        street: "金山街道",
        garageName: "地下停车场",
        distance: 3.6,
        totalSpaces: 96,
        rentedSpaces: 71,
        monthlyPrice: 320,
      },
      {
        id: "COMMUNITY-003",
        communityName: "湖边御景D区",
        projectName: "下湖安置型商品房一期（湖边御景D区）",
        projectType: "公司自营项目",
        district: "思明区",
        street: "莲前街道",
        garageName: "地下停车场",
        distance: 5.2,
        totalSpaces: 110,
        rentedSpaces: 89,
        monthlyPrice: 280,
      },
    ];
    const communityProjectCatalog = Object.fromEntries(
      communityCatalog.map((community) => [community.communityName, community]),
    );
    const communityById = Object.fromEntries(
      communityCatalog.map((community) => [community.id, community]),
    );
    const garageStreetByCommunity = Object.fromEntries(
      communityCatalog.map((community) => [community.communityName, community.street]),
    );
    const RENT_VEHICLE_LIMIT = 2;
    const rentVehicleState = {
      vehicles: [],
    };
    const rentOwnerState = {
      name: "",
      phone: "",
      idCard: "",
    };
    const userProfileState = {
      nickname: "湖里车主",
      avatarUrl: "",
      name: "张先生",
      phone: "13800006688",
      idCard: "350211199001011234",
    };
    const rentTermState = {
      months: 1,
      noticeChecked: false,
    };
    const rentNoticeReadState = {
      secondsLeft: 0,
      read: false,
      agreed: false,
      page: 0,
    };
    const rentDateMinimum = new Date();
    rentDateMinimum.setHours(0, 0, 0, 0);
    const rentDatePickerState = {
      year: rentDateMinimum.getFullYear(),
      month: rentDateMinimum.getMonth() + 1,
      day: rentDateMinimum.getDate(),
    };
    const rentGarageState = {
      area: "all",
    };
    const refundState = {
      activeId: "TK202608200014",
      filter: "all",
      listReturnScreen: "personal",
      detailReturnScreen: "refundList",
      records: [
        {
          id: "TK202608200014",
          requestNo: "TK202608200014",
          orderNo: "AS202608080014",
          community: "思明保障房小区",
          garage: "地下停车场 B1",
          plate: "闽D A24680",
          originalPaidAmount: 960,
          start: "2026-06-01",
          end: "2026-08-31",
          remainingTerm: "11 天",
          estimatedAmount: 768,
          approvedAmount: null,
          status: "审批中",
          reason: "不再使用月租",
          note: "车辆已出售，申请提前结束月租。",
          submittedAt: "2026-08-20 14:36",
          approvedAt: "--",
          hasCompletedInvoice: false,
        },
        {
          id: "TK202607120021",
          requestNo: "TK202607120021",
          orderNo: "AS202606180046",
          community: "湖里安商房小区",
          garage: "地下停车场 A 区",
          plate: "闽D 13579",
          originalPaidAmount: 900,
          start: "2026-06-18",
          end: "2026-09-17",
          remainingTerm: "42 天",
          estimatedAmount: 630,
          approvedAmount: 600,
          status: "已通过",
          reason: "搬离小区",
          note: "",
          submittedAt: "2026-07-12 09:42",
          approvedAt: "2026-07-14 16:20",
          hasCompletedInvoice: true,
        },
        {
          id: "TK202606050009",
          requestNo: "TK202606050009",
          orderNo: "AS202605160032",
          community: "海沧安商房小区",
          garage: "北区地下车库",
          plate: "闽D C85102",
          originalPaidAmount: 840,
          start: "2026-05-16",
          end: "2026-08-15",
          remainingTerm: "--",
          estimatedAmount: 560,
          approvedAmount: null,
          status: "未通过",
          reason: "搬离小区",
          note: "该订单不符合退款条件，退款申请未通过。",
          submittedAt: "2026-06-05 11:08",
          approvedAt: "2026-06-06 15:16",
          hasCompletedInvoice: false,
        },
      ],
    };
    const orderState = {
      activeId: "AS202608170023",
      filter: "all",
      subFilter: "all",
      listReturnScreen: "personal",
      detailReturnScreen: "orderList",
      renewMonths: 1,
      refundReason: "不再使用月租",
      invoiceType: "personal",
      invoiceFilter: "all",
      invoiceTypeFilter: "all",
      invoiceListReturnScreen: "personal",
      invoiceResultReturnScreen: "invoiceList",
      records: [
        {
          id: "AS202608170023",
          orderNo: "AS202608170023",
          type: "新办",
          community: "湖里安商房小区",
          garage: "地下停车场 A 区",
          plate: "闽D 12345",
          start: "2026-08-07",
          end: "2026-09-06",
          months: 1,
          amount: 300,
          createdAt: "2026-08-07 10:21",
          paymentAt: "2026-08-07 10:24",
          rentalStatus: "有效",
          passStatus: "已开通",
          refundStatus: "未申请",
          invoiceStatus: "申请中",
          projectType: "公司自营项目",
          invoiceRequestNo: "KP202608170023",
          invoiceAppliedAt: "2026-08-25 10:42",
          invoiceType: "增值税发票",
        },
        {
          id: "AS202608080014",
          orderNo: "AS202608080014",
          type: "续费",
          community: "思明保障房小区",
          garage: "地下停车场 B1",
          plate: "闽D A24680",
          start: "2026-06-01",
          end: "2026-08-31",
          months: 3,
          amount: 960,
          createdAt: "2026-06-01 09:12",
          paymentAt: "2026-06-01 09:16",
          rentalStatus: "有效",
          passStatus: "已暂停",
          refundStatus: "审批中",
          invoiceStatus: "未申请",
          projectType: "公司自营项目",
        },
        {
          id: "AS202607010004",
          orderNo: "AS202607010004",
          type: "新办",
          community: "杏林湾安置房小区",
          garage: "地下停车场 C 区",
          plate: "闽D 13579",
          start: "2026-07-01",
          end: "2026-08-01",
          months: 1,
          amount: 260,
          createdAt: "2026-07-01 11:28",
          paymentAt: "2026-07-01 11:32",
          rentalStatus: "过期",
          passStatus: "已结束",
          refundStatus: "未申请",
          invoiceStatus: "已完成",
          projectType: "区财政代管项目",
          invoiceRequestNo: "KP202607010004",
          invoiceNumber: "厦非税电202607010004",
          invoiceAppliedAt: "2026-07-01 11:34",
          invoiceCompletedAt: "2026-07-03 15:20",
          invoiceType: "非税电子票据",
        },
        {
          id: "AS202606180046",
          orderNo: "AS202606180046",
          type: "新办",
          community: "湖里安商房小区",
          garage: "地下停车场 A 区",
          plate: "闽D 13579",
          start: "2026-06-18",
          end: "2026-09-17",
          months: 3,
          amount: 900,
          createdAt: "2026-06-18 09:28",
          paymentAt: "2026-06-18 09:31",
          rentalStatus: "终止",
          passStatus: "已结束",
          refundStatus: "已通过",
          invoiceStatus: "已完成",
          projectType: "公司自营项目",
          invoiceRequestNo: "KP202606180046",
          invoiceNumber: "厦税电开202606180046",
          invoiceAppliedAt: "2026-06-18 09:33",
          invoiceCompletedAt: "2026-06-19 15:20",
          invoiceType: "增值税发票",
        },
        {
          id: "AS202605160032",
          orderNo: "AS202605160032",
          type: "新办",
          community: "海沧安商房小区",
          garage: "北区地下车库",
          plate: "闽D C85102",
          start: "2026-05-16",
          end: "2026-08-15",
          months: 3,
          amount: 840,
          createdAt: "2026-05-16 14:06",
          paymentAt: "2026-05-16 14:10",
          rentalStatus: "过期",
          passStatus: "已结束",
          refundStatus: "未通过",
          invoiceStatus: "申请中",
          projectType: "区财政代管项目",
          invoiceRequestNo: "KP202605160032",
          invoiceAppliedAt: "2026-08-18 09:16",
          invoiceType: "非税电子票据",
        },
        {
          id: "AS202605080019",
          orderNo: "AS202605080019",
          type: "新办",
          community: "集美安商房小区",
          garage: "地下停车场 2 区",
          plate: "闽D B32716",
          start: "2026-05-08",
          end: "2026-06-07",
          months: 1,
          amount: 320,
          createdAt: "2026-05-08 08:46",
          paymentAt: "2026-05-08 08:49",
          rentalStatus: "过期",
          passStatus: "已结束",
          refundStatus: "未申请",
          invoiceStatus: "申请中",
          projectType: "公司自营项目",
          invoiceRequestNo: "KP202605080019",
          invoiceAppliedAt: "2026-08-23 15:08",
          invoiceType: "增值税普通发票",
        },
        {
          id: "AS202604120009",
          orderNo: "AS202604120009",
          type: "新办",
          community: "湖里安商房小区",
          garage: "地下停车场 A 区",
          plate: "闽D 12345",
          start: "2026-04-12",
          end: "2026-05-11",
          months: 1,
          amount: 300,
          createdAt: "2026-04-12 11:16",
          paymentAt: "2026-04-12 11:19",
          rentalStatus: "过期",
          passStatus: "已结束",
          refundStatus: "未申请",
          invoiceStatus: "申请中",
          projectType: "公司自营项目",
          invoiceRequestNo: "KP202604120009",
          invoiceAppliedAt: "2026-08-21 09:32",
          invoiceType: "增值税专用发票",
        },
        {
          id: "AS202604050028",
          orderNo: "AS202604050028",
          type: "新办",
          community: "同安城北安居小区",
          garage: "地下停车场 B 区",
          plate: "闽D C85102",
          start: "2026-04-05",
          end: "2026-05-04",
          months: 1,
          amount: 240,
          createdAt: "2026-04-05 14:22",
          paymentAt: "2026-04-05 14:25",
          rentalStatus: "过期",
          passStatus: "已结束",
          refundStatus: "未申请",
          invoiceStatus: "申请中",
          projectType: "区财政代管项目",
          invoiceRequestNo: "KP202604050028",
          invoiceAppliedAt: "2026-08-19 16:14",
          invoiceType: "非税电子票据",
        },
        {
          id: "AS202603160007",
          orderNo: "AS202603160007",
          type: "新办",
          community: "翔安新店保障房",
          garage: "地下停车场 A 区",
          plate: "闽D 67890",
          start: "2026-03-16",
          end: "2026-04-15",
          months: 1,
          amount: 250,
          createdAt: "2026-03-16 10:08",
          paymentAt: "2026-03-16 10:11",
          rentalStatus: "过期",
          passStatus: "已结束",
          refundStatus: "未申请",
          invoiceStatus: "已完成",
          projectType: "区财政代管项目",
          invoiceRequestNo: "KP202603160007",
          invoiceNumber: "厦非税电202603160007",
          invoiceAppliedAt: "2026-03-16 10:13",
          invoiceCompletedAt: "2026-03-18 14:36",
          invoiceType: "非税电子票据",
        },
        {
          id: "AS202602180012",
          orderNo: "AS202602180012",
          type: "新办",
          community: "杏林湾安置房小区",
          garage: "地下停车场 C 区",
          plate: "闽D 13579",
          start: "2026-02-18",
          end: "2026-03-17",
          months: 1,
          amount: 260,
          createdAt: "2026-02-18 09:42",
          paymentAt: "2026-02-18 09:45",
          rentalStatus: "过期",
          passStatus: "已结束",
          refundStatus: "未申请",
          invoiceStatus: "已完成",
          projectType: "公司自营项目",
          invoiceRequestNo: "KP202602180012",
          invoiceNumber: "厦税电开202602180012",
          invoiceAppliedAt: "2026-02-18 09:48",
          invoiceCompletedAt: "2026-02-19 13:20",
          invoiceType: "增值税普通发票",
        },
      ],
    };

    function createDemoOrder(seed) {
      const community = communityById[seed.communityId];
      const invoice = seed.invoice || {};
      const hasInvoiceApplication = invoice.status && invoice.status !== "未申请";
      const vehicles = (Array.isArray(seed.vehicles) && seed.vehicles.length
        ? seed.vehicles
        : [{ plate: seed.plate, color: seed.color || seed.plateColor || "", colorCode: seed.colorCode || seed.plateColorCode || "" }])
        .map(normalizeRegisteredVehicle)
        .filter((vehicle) => vehicle.plate);
      const primaryVehicle = vehicles[0] || { plate: seed.plate || "--", color: "", colorCode: "" };
      return {
        id: seed.orderNo,
        orderNo: seed.orderNo,
        type: seed.type,
        communityId: community.id,
        community: community.communityName,
        garage: community.garageName,
        location: `${community.district} · ${community.street} · ${community.garageName}`,
        projectName: community.projectName,
        projectType: community.projectType,
        vehicleId: vehicles.map((vehicle) => `VEHICLE-${vehicle.plate.replace(/\s+/g, "")}`).join(","),
        plate: primaryVehicle.plate,
        color: primaryVehicle.color,
        colorCode: primaryVehicle.colorCode,
        vehicles,
        vehicleCount: vehicles.length,
        start: seed.start,
        end: seed.end,
        months: seed.months,
        amount: community.monthlyPrice * seed.months,
        createdAt: seed.createdAt,
        paymentAt: seed.paymentAt,
        rentalStatus: seed.rentalStatus,
        passStatus: seed.passStatus || (seed.refundStatus === "审批中"
          ? (seed.rentalStatus === "有效" ? "已暂停" : "待生效")
          : seed.rentalStatus === "有效" ? "已开通" : seed.rentalStatus === "待生效" ? "待生效" : "已结束"),
        refundStatus: seed.refundStatus || "未申请",
        invoiceStatus: invoice.status || "未申请",
        invoiceRequestNo: hasInvoiceApplication ? invoice.requestNo : undefined,
        invoiceNumber: invoice.number,
        invoiceAppliedAt: hasInvoiceApplication ? invoice.appliedAt : undefined,
        invoiceCompletedAt: invoice.completedAt,
        invoiceType: invoice.type,
        invoiceTitle: invoice.title,
        invoiceFiles: Array.isArray(invoice.files) && invoice.files.length
          ? invoice.files
          : (invoice.number ? [{ number: invoice.number, completedAt: invoice.completedAt, type: invoice.type }] : []),
        payerNameSnapshot: invoice.payerName || "张先生",
        payerPhoneSnapshot: invoice.payerPhone || "13800006688",
        ownerNameSnapshot: "张先生",
        ownerPhoneSnapshot: "13800006688",
      };
    }

    function buildDemoOrderRecords() {
      return [
        {
          orderNo: "AS202608170023",
          type: "新办",
          communityId: "COMMUNITY-001",
          plate: "闽D 12345",
          vehicles: [
            { plate: "闽D 12345", color: "蓝牌", colorCode: "02" },
            { plate: "闽D 13579", color: "蓝牌", colorCode: "02" },
          ],
          start: "2026-08-07",
          end: "2026-09-06",
          months: 1,
          createdAt: "2026-08-07 10:21",
          paymentAt: "2026-08-07 10:24",
          rentalStatus: "有效",
          invoice: { status: "申请中", requestNo: "KP202608170023", appliedAt: "2026-08-25 10:42", type: "增值税普通发票", title: "张先生" },
        },
        {
          orderNo: "AS202608100018",
          type: "新办",
          communityId: "COMMUNITY-002",
          plate: "闽D A24680",
          start: "2026-08-01",
          end: "2027-01-31",
          months: 6,
          createdAt: "2026-08-01 09:12",
          paymentAt: "2026-08-01 09:16",
          rentalStatus: "有效",
        },
        {
          orderNo: "AS202608070015",
          type: "新办",
          communityId: "COMMUNITY-003",
          plate: "闽D 67890",
          start: "2026-08-07",
          end: "2026-09-06",
          months: 1,
          createdAt: "2026-08-07 15:02",
          paymentAt: "2026-08-07 15:05",
          rentalStatus: "有效",
        },
        {
          orderNo: "AS202608250016",
          type: "续费",
          communityId: "COMMUNITY-003",
          plate: "闽D 67890",
          start: "2026-09-07",
          end: "2026-12-06",
          months: 3,
          createdAt: "2026-08-25 10:22",
          paymentAt: "2026-08-25 10:25",
          rentalStatus: "待生效",
        },
        {
          orderNo: "AS202607010004",
          type: "新办",
          communityId: "COMMUNITY-002",
          plate: "闽D 13579",
          start: "2026-07-01",
          end: "2026-07-31",
          months: 1,
          createdAt: "2026-07-01 11:28",
          paymentAt: "2026-07-01 11:32",
          rentalStatus: "过期",
          invoice: { status: "已完成", requestNo: "KP202607010004", number: "厦非税电202607010004", appliedAt: "2026-07-01 11:34", completedAt: "2026-07-03 15:20", type: "非税电子票据", title: "张先生", files: [{ number: "厦非税电202607010004", completedAt: "2026-07-03 15:20", type: "非税电子票据" }, { number: "厦非税电202607010005", completedAt: "2026-07-03 15:21", type: "非税电子票据" }] },
        },
        {
          orderNo: "AS202606180046",
          type: "新办",
          communityId: "COMMUNITY-001",
          plate: "闽D 13579",
          start: "2026-06-18",
          end: "2026-12-17",
          months: 6,
          createdAt: "2026-06-18 09:28",
          paymentAt: "2026-06-18 09:31",
          rentalStatus: "终止",
          refundStatus: "已通过",
          invoice: { status: "已完成", requestNo: "KP202606180046", number: "厦税电开202606180046", appliedAt: "2026-06-18 09:33", completedAt: "2026-06-19 15:20", type: "增值税专用发票", title: "厦门湖里国投物业管理有限公司", files: [{ number: "厦税电开202606180046", completedAt: "2026-06-19 15:20", type: "增值税专用发票" }, { number: "厦税电开202606180047", completedAt: "2026-06-19 15:21", type: "增值税专用发票" }, { number: "厦税电开202606180048", completedAt: "2026-06-19 15:22", type: "增值税专用发票" }] },
        },
        {
          orderNo: "AS202605160032",
          type: "新办",
          communityId: "COMMUNITY-003",
          plate: "闽D 12345",
          start: "2026-05-16",
          end: "2026-08-15",
          months: 3,
          createdAt: "2026-05-16 14:06",
          paymentAt: "2026-05-16 14:10",
          rentalStatus: "过期",
          refundStatus: "未通过",
          invoice: { status: "申请中", requestNo: "KP202605160032", appliedAt: "2026-08-18 09:16", type: "增值税普通发票", title: "张先生" },
        },
        {
          orderNo: "AS202604050028",
          type: "续费",
          communityId: "COMMUNITY-002",
          plate: "闽D A24680",
          start: "2026-04-05",
          end: "2026-07-04",
          months: 3,
          createdAt: "2026-04-05 14:22",
          paymentAt: "2026-04-05 14:25",
          rentalStatus: "过期",
          refundStatus: "审批中",
          invoice: { status: "申请中", requestNo: "KP202604050028", appliedAt: "2026-08-19 16:14", type: "非税电子票据", title: "张先生" },
        },
        {
          orderNo: "AS202603160007",
          type: "新办",
          communityId: "COMMUNITY-001",
          plate: "闽D 67890",
          start: "2026-02-16",
          end: "2026-08-15",
          months: 6,
          createdAt: "2026-03-16 10:08",
          paymentAt: "2026-03-16 10:11",
          rentalStatus: "过期",
          invoice: { status: "已完成", requestNo: "KP202603160007", number: "厦税电开202603160007", appliedAt: "2026-03-16 10:13", completedAt: "2026-03-18 14:36", type: "增值税普通发票", title: "张先生", files: [{ number: "厦税电开202603160007", completedAt: "2026-03-18 14:36", type: "增值税普通发票" }, { number: "厦税电开202603160008", completedAt: "2026-03-18 14:37", type: "增值税普通发票" }] },
        },
        {
          orderNo: "AS202602180012",
          type: "新办",
          communityId: "COMMUNITY-002",
          plate: "闽D 13579",
          start: "2026-02-18",
          end: "2026-05-17",
          months: 3,
          createdAt: "2026-02-18 09:42",
          paymentAt: "2026-02-18 09:45",
          rentalStatus: "过期",
        },
        {
          orderNo: "AS202605120034",
          type: "新办",
          communityId: "COMMUNITY-001",
          plate: "闽D A24680",
          start: "2026-05-12",
          end: "2026-06-11",
          months: 1,
          createdAt: "2026-05-12 10:18",
          paymentAt: "2026-05-12 10:21",
          rentalStatus: "过期",
        },
      ].map(createDemoOrder);
    }

    function createDemoRefund(orderNo, seed) {
      const order = orderState.records.find((item) => item.orderNo === orderNo);
      return {
        id: seed.requestNo,
        requestNo: seed.requestNo,
        orderNo: order.orderNo,
        community: order.community,
        garage: order.garage,
        plate: orderVehicleText(order, { compact: true }),
        vehicles: getOrderVehicles(order),
        originalPaidAmount: order.amount,
        start: order.start,
        end: order.end,
        remainingTerm: seed.remainingTerm,
        estimatedAmount: seed.estimatedAmount,
        approvedAmount: seed.approvedAmount ?? null,
        status: seed.status,
        reason: seed.reason,
        note: seed.note || "",
        submittedAt: seed.submittedAt,
        approvedAt: seed.approvedAt || "--",
        hasCompletedInvoice: order.invoiceStatus === "已完成",
      };
    }

    orderState.records = buildDemoOrderRecords();
    orderState.activeId = orderState.records[0].id;
    refundState.records = [
      createDemoRefund("AS202606180046", {
        requestNo: "TK202607120021",
        status: "已通过",
        reason: "搬离小区",
        remainingTerm: "42 天",
        estimatedAmount: 1260,
        approvedAmount: 1200,
        note: "已完成退款审核。",
        submittedAt: "2026-07-12 09:42",
        approvedAt: "2026-07-14 16:20",
      }),
      createDemoRefund("AS202605160032", {
        requestNo: "TK202606050009",
        status: "未通过",
        reason: "搬离小区",
        remainingTerm: "--",
        estimatedAmount: 560,
        note: "该订单不符合退款条件，退款申请未通过。",
        submittedAt: "2026-06-05 11:08",
        approvedAt: "2026-06-06 15:16",
      }),
      createDemoRefund("AS202604050028", {
        requestNo: "TK202604180013",
        status: "审批中",
        reason: "不再使用月租",
        remainingTerm: "以审批测算为准",
        estimatedAmount: 768,
        note: "车辆已出售，申请提前结束月租。",
        submittedAt: "2026-04-18 14:36",
      }),
    ];
    refundState.activeId = refundState.records[0].id;

    const accountState = {
      current: "wechat",
      profiles: {
        wechat: { ...userProfileState },
        sms: { nickname: "", avatarUrl: "", name: "", phone: "13900001111", idCard: "" },
      },
      orders: {
        wechat: orderState.records,
        sms: [],
      },
      refunds: {
        wechat: refundState.records,
        sms: [],
      },
      refundAccounts: {
        wechat: { bank: "", account: "", phone: "" },
        sms: { bank: "", account: "", phone: "" },
      },
    };
    const vehicleFormState = {
      plateColor: "蓝色车牌",
      plateColorCode: "02",
      grade: "小型车",
      gradeCode: "1",
      vehicleTypeCode: "1",
      plateProvince: "闽",
      plateLetter: "D",
      plateSuffix: "",
      activePlateSlot: "suffix",
      photos: [],
      editingPlateKey: "",
    };
    const vehicleSwapState = {
      orderId: "",
      fromPlate: "",
      toVehicle: null,
      mode: "swap",
    };
    const externallyBoundVehicleKeys = new Set(["闽D88888"]);
    const screenTitles = {
      home: "湖里国投月租车位小程序",
      personal: "个人中心",
      rentFlow: "办理月租",
      rentOwner: "补全办理资料",
      rentVehicle: "选择车辆",
      rentVehicleSelect: "选择车辆",
      rentNotice: "办理告知书",
      rentConfirm: "确认支付信息",
      personalInfo: "个人信息",
      about: "关于小程序",
      settings: "设置",
      accountManage: "账号管理",
      city: "选择城市",
      garageList: "可办理车库",
      globalSearch: "搜索",
      garageMap: "车库位置",
      vehicleManage: "车辆管理",
      vehicleForm: "新增车辆",
      vehicleSwapSource: "本订单已办理车辆",
      vehicleSwap: "变更月租车辆",
      vehicleSwapSelect: "选择新车辆",
      orderList: "我的订单",
      orderDetail: "订单详情",
      orderRenew: "月租续费",
      orderRefund: "申请退款",
      refundAccount: "退款账户",
      refundList: "退款记录",
      refundDetail: "退款详情",
      orderInvoice: "申请开票",
      invoiceList: "开票记录",
      invoiceResult: "开票申请详情",
      login: "登录",
    };
    const loginViewTitles = {
      main: "登录",
      bind: "手机号验证",
      sms: "验证码登录",
    };
    let toastTimer;
    let refreshTimer;
    let rentNoticeTimer;
    let vehicleFormReturnScreen = "vehicleManage";
    let rentVehicleProfileRequired = false;
    let garageMapReturnScreen = "home";
    let suppressHistory = false;

    function updatePageTitle(tabName = document.body.dataset.currentTab) {
      const nextTitle = tabName === "login"
        ? loginViewTitles[document.body.dataset.loginView] || screenTitles.login
        : screenTitles[tabName] || screenTitles.home;
      document.title = nextTitle;
    }

    function showTab(tabName, options = {}) {
      document.body.dataset.currentTab = tabName;

      screens.forEach((screen) => {
        screen.classList.toggle("is-active", screen.dataset.screen === tabName);
        if (screen.dataset.screen === tabName) {
          const content = screen.querySelector(".content");
          if (content) content.scrollTop = 0;
        }
      });

      tabButtons.forEach((button) => {
        const active = button.dataset.tab === tabName;
        button.classList.toggle("active", active);
        button.setAttribute("aria-current", active ? "page" : "false");
      });

      updatePageTitle(tabName);

      if (!suppressHistory && options.pushHistory !== false && history.state?.screen !== tabName) {
        history.pushState({
          screen: tabName,
          loginView: document.body.dataset.loginView,
        }, "", location.href);
      }
    }

    function showLoginView(viewName) {
      document.body.dataset.loginView = viewName;
      loginViews.forEach((view) => {
        view.classList.toggle("is-active", view.dataset.loginView === viewName);
      });
      if (document.body.dataset.currentTab === "login") {
        updatePageTitle("login");
      }
    }

    window.addEventListener("popstate", (event) => {
      const state = event.state || { screen: "home", loginView: "main" };
      suppressHistory = true;
      if (state.loginView) showLoginView(state.loginView);
      showTab(state.screen || "home", { pushHistory: false });
      suppressHistory = false;
    });

    function activeAgreement() {
      const activeView = document.querySelector(".login-view.is-active");
      return activeView ? activeView.querySelector("[data-agreement-toggle]") : null;
    }

    function agreementChecked() {
      const agreement = activeAgreement();
      return Boolean(agreement && agreement.classList.contains("is-checked"));
    }

    let fieldErrorSequence = 0;

    function fieldErrorKey(input) {
      if (!input) return "";
      if (!input.dataset.fieldErrorKey) {
        input.dataset.fieldErrorKey = input.id || `field-error-${++fieldErrorSequence}`;
      }
      return input.dataset.fieldErrorKey;
    }

    function fieldErrorHost(input) {
      return input?.closest(".personal-info-field, .rent-prerequisite-field, .vehicle-field, .phone-field") || input?.parentElement;
    }

    function clearFieldError(input) {
      if (!input) return;
      const key = fieldErrorKey(input);
      const host = fieldErrorHost(input);
      input.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
      input.closest(".plate-input-shell")?.classList.remove("is-invalid");
      host?.querySelector(`.field-error-message[data-field-error-for="${key}"]`)?.remove();
      if (host && !host.querySelector(".field-error-message")) host.classList.remove("has-field-error");
    }

    function showFieldError(input, message, options = {}) {
      const { focus = true, toast = true } = options;
      if (input) {
        const key = fieldErrorKey(input);
        const host = fieldErrorHost(input);
        input.classList.add("is-invalid");
        input.setAttribute("aria-invalid", "true");
        input.closest(".plate-input-shell")?.classList.add("is-invalid");
        if (host) {
          host.classList.add("has-field-error");
          let error = host.querySelector(`.field-error-message[data-field-error-for="${key}"]`);
          if (!error) {
            error = document.createElement("p");
            error.className = "field-error-message";
            error.dataset.fieldErrorFor = key;
            host.appendChild(error);
          }
          error.textContent = message;
        }
        if (focus) input.focus();
      }
      if (toast) showToast(message);
    }

    function isValidMobilePhone(value) {
      return /^1[3-9]\d{9}$/.test(String(value || "").trim());
    }

    function isChineseName(value) {
      return /^[\u3400-\u9fff·]{2,20}$/.test(String(value || "").trim());
    }

    function isValidIdCard(value) {
      const idCard = String(value || "").trim().toUpperCase();
      if (!/^\d{17}[\dX]$/.test(idCard)) return false;
      const year = Number(idCard.slice(6, 10));
      const month = Number(idCard.slice(10, 12));
      const day = Number(idCard.slice(12, 14));
      const birthday = new Date(year, month - 1, day);
      return year >= 1900 && year <= new Date().getFullYear() &&
        birthday.getFullYear() === year && birthday.getMonth() === month - 1 && birthday.getDate() === day;
    }

    function validateProfile(profile, fields = {}) {
      const name = String(profile.name || "").trim();
      const phone = String(profile.phone || "").trim();
      const idCard = String(profile.idCard || "").trim().toUpperCase();
      const errors = [];
      Object.values(fields).forEach(clearFieldError);
      if (!name) {
        errors.push({ input: fields.name, message: "请输入真实姓名" });
      } else if (!isChineseName(name)) {
        errors.push({ input: fields.name, message: "真实姓名需填写2至20个中文字符" });
      }
      if (!phone) {
        errors.push({ input: fields.phone, message: "请输入手机号" });
      } else if (!isValidMobilePhone(phone)) {
        errors.push({ input: fields.phone, message: "请输入正确的11位手机号" });
      }
      if (!idCard) {
        errors.push({ input: fields.idCard, message: "请输入身份证号" });
      } else if (!isValidIdCard(idCard)) {
        errors.push({ input: fields.idCard, message: "身份证号应为18位，且出生日期有效" });
      }
      if (errors.length) {
        errors.forEach(({ input, message }) => showFieldError(input, message, { focus: false, toast: false }));
        errors[0].input?.focus();
        showToast("请按提示完善个人信息");
        return false;
      }
      return true;
    }

    function getLoginInput(view, type) {
      return document.querySelector(`[data-login-${type}="${view}"]`);
    }

    function validateLoginForm() {
      const view = document.body.dataset.loginView;
      const phoneInput = getLoginInput(view, "phone");
      const codeInput = getLoginInput(view, "code");
      const phone = phoneInput?.value.trim() || "";
      const code = codeInput?.value.trim() || "";
      if (!isValidMobilePhone(phone)) {
        showFieldError(phoneInput, "请输入正确的11位手机号");
        return false;
      }
      if (!/^\d{6}$/.test(code)) {
        showFieldError(codeInput, "请输入6位验证码");
        return false;
      }
      return true;
    }

    function showToast(message) {
      const toast = document.querySelector(".toast");
      if (toast) toast.textContent = message;
      document.body.dataset.toast = "visible";
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        document.body.dataset.toast = "hidden";
      }, 1700);
    }

    function assignInitialAccountVehicles() {
      document.querySelectorAll("[data-vehicle-card], [data-rent-vehicle-option]").forEach((item) => {
        if (!item.dataset.account) item.dataset.account = "wechat";
      });
    }

    function setCurrentAccount(accountType) {
      const previousAccount = accountState.current;
      accountState.profiles[previousAccount] = { ...userProfileState };
      accountState.orders[previousAccount] = orderState.records;
      accountState.refunds[previousAccount] = refundState.records;

      accountState.current = accountType;
      Object.assign(userProfileState, accountState.profiles[accountType]);
      orderState.records = accountState.orders[accountType];
      orderState.activeId = orderState.records.find((order) => !order.hiddenFromUser)?.id || "";
      refundState.records = accountState.refunds[accountType];
      refundState.activeId = refundState.records[0]?.id || "";
      rentVehicleState.vehicles = [];
      Object.assign(rentOwnerState, userProfileState);
      document.body.dataset.account = accountType;

      syncPersonalProfile();
      syncRentVehiclePicker();
      updateVehicleCollection();
      syncHomeMonthlyCard();
      renderOrderList();
      renderRefundRecordList();
      renderInvoiceList();
    }

    function signIn() {
      if (!agreementChecked()) {
        showToast("请先勾选并同意协议");
        return;
      }
      if (!validateLoginForm()) return;

      setCurrentAccount(document.body.dataset.loginView === "sms" ? "sms" : "wechat");
      document.body.dataset.auth = "authed";
      document.body.dataset.toast = "hidden";
      showTab("home");
    }

    function requireLogin() {
      document.body.dataset.auth = "guest";
      showLoginView("main");
      showTab("login");
    }

    function ensureAuthenticated() {
      if (document.body.dataset.auth === "authed") return true;
      requireLogin();
      return false;
    }

    function startQuickLogin() {
      if (!agreementChecked()) {
        showToast("请先勾选并同意协议");
        return;
      }

      document.body.dataset.toast = "hidden";
      showLoginView("bind");
    }

    function setCurrentCity(cityName) {
      if (!ensureAuthenticated()) return;
      currentCityLabels.forEach((label) => {
        label.textContent = cityName;
      });
      showTab("home");
    }

    function maskProfilePhone(phone) {
      const value = String(phone || "").replace(/\s+/g, "");
      return value.length === 11 ? `${value.slice(0, 3)}****${value.slice(-4)}` : value;
    }

    function displayProfileName(profile) {
      const nickname = String(profile?.nickname || "").trim();
      if (nickname) return nickname;
      const phone = String(profile?.phone || "").replace(/\D/g, "");
      return phone.length >= 4 ? `${phone.slice(-4)}用户` : "用户";
    }

    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;",
      })[character]);
    }

    function syncPersonalProfile() {
      if (personalNicknameInput) personalNicknameInput.value = userProfileState.nickname || "";
      if (personalNameInput) personalNameInput.value = userProfileState.name;
      if (personalPhoneInput) personalPhoneInput.value = userProfileState.phone;
      if (personalIdInput) personalIdInput.value = userProfileState.idCard;
      authedNameLabels.forEach((label) => {
        label.textContent = displayProfileName(userProfileState);
      });
      authedPhoneLabels.forEach((label) => {
        label.textContent = maskProfilePhone(userProfileState.phone);
      });
      profileAvatarSlots.forEach((slot) => {
        const image = slot.querySelector("img");
        const icon = slot.querySelector("svg");
        const hasAvatar = Boolean(userProfileState.avatarUrl);
        if (image) {
          image.src = hasAvatar ? userProfileState.avatarUrl : "";
          image.hidden = !hasAvatar;
        }
        if (icon) icon.hidden = hasAvatar;
        slot.classList.toggle("has-image", hasAvatar);
      });
    }

    function openPersonalInfo() {
      if (document.body.dataset.auth !== "authed") {
        requireLogin();
        return;
      }
      syncPersonalProfile();
      showTab("personalInfo");
    }

    function savePersonalInfo() {
      const nickname = personalNicknameInput?.value.trim() || "";
      const name = personalNameInput?.value.trim() || "";
      const phone = personalPhoneInput?.value.trim() || "";
      const idCard = personalIdInput?.value.trim().toUpperCase() || "";
      if (!validateProfile({ name, phone, idCard }, {
        name: personalNameInput,
        phone: personalPhoneInput,
        idCard: personalIdInput,
      })) return;
      userProfileState.nickname = nickname;
      userProfileState.name = name;
      userProfileState.phone = phone;
      userProfileState.idCard = idCard;
      accountState.profiles[accountState.current] = { ...userProfileState };
      syncPersonalProfile();
      if (rentOwnerNameInput) rentOwnerNameInput.value = name;
      if (rentOwnerPhoneInput) rentOwnerPhoneInput.value = phone;
      if (rentOwnerIdCardInput) rentOwnerIdCardInput.value = idCard;
      rentOwnerState.name = name;
      rentOwnerState.phone = phone;
      rentOwnerState.idCard = idCard;
      updateRentOwnerNextState();
      showTab("personal");
      showToast("个人信息已保存");
    }

    function updateGarageSearch() {
      if (!garageQuery || !garageSearchScreen) return;
      const keyword = garageQuery.value.trim().toLowerCase();
      let visibleCount = 0;
      const hasKeyword = Boolean(keyword);
      garageSearchScreen.dataset.searchStarted = hasKeyword ? "true" : "false";

      searchResults.forEach((card) => {
        const searchableText = `${card.dataset.keywords || ""} ${card.textContent}`.toLowerCase();
        const visible = hasKeyword && searchableText.includes(keyword);
        card.style.display = visible ? "" : "none";
        if (visible) visibleCount += 1;
      });

      garageSearchScreen.dataset.searchEmpty = hasKeyword && visibleCount === 0 ? "true" : "false";
    }

    function openGarageMap(card) {
      if (!ensureAuthenticated()) return;
      const garageName = card.querySelector(".garage-name")?.textContent.trim() || "车库位置";
      const garageLocation = card.querySelector(".garage-sub")?.textContent.trim() || "";
      const [locationName, distance] = garageLocation.split(" · 距你 ");
      garageMapReturnScreen = document.body.dataset.currentTab || "home";
      mapGarageNames.forEach((label) => {
        label.textContent = garageName;
      });
      if (mapGarageLocation) mapGarageLocation.textContent = locationName || garageLocation;
      if (mapGarageDistance) mapGarageDistance.textContent = distance ? `距你 ${distance}` : "";
      showTab("garageMap");
    }

    function syncFullGarageList() {
      if (!fullGarageList || fullGarageList.children.length) return;
      document.querySelectorAll(".home-garage-list .garage-card").forEach((card) => {
        const clonedCard = card.cloneNode(true);
        fullGarageList.appendChild(clonedCard);
      });
    }

    function renderCommunityCatalog() {
      if (!homeGarageList) return;
      homeGarageList.innerHTML = communityCatalog.map((community) => {
        const availableSpaces = community.totalSpaces - community.rentedSpaces;
        return `
          <section class="card garage-card" data-community-id="${community.id}" data-project-name="${community.projectName}" data-project-type="${community.projectType}">
            <div>
              <div class="garage-name"><svg class="icon sm"><use href="#i-parking"></use></svg>${community.communityName}</div>
              <div class="garage-sub" data-distance="${community.distance}">${community.garageName}</div>
              <div class="garage-stats">
                <div class="garage-stat-row"><span>${community.district}</span><span>总车位 ${community.totalSpaces}</span><span>已租 ${community.rentedSpaces}</span><span>可办 ${availableSpaces}</span></div>
                <div class="garage-status-row"><span class="tag">可办理</span></div>
              </div>
            </div>
            <div>
              <div class="price">${community.monthlyPrice}<small>元/月</small></div>
              <div class="rent-button">租</div>
            </div>
          </section>`;
      }).join("");
    }

    function applyCommunityProjectMetadata() {
      document.querySelectorAll(".home-garage-list .garage-card").forEach((card) => {
        const communityName = card.querySelector(".garage-name")?.textContent.trim() || "";
        const project = communityProjectCatalog[communityName];
        if (!project) return;
        card.dataset.communityId = project.id;
        card.dataset.projectName = project.projectName;
        card.dataset.projectType = project.projectType;
      });
    }

    function syncRentGarageList() {
      if (!rentGarageList) return;
      if (!rentGarageList.children.length) {
        const cards = Array.from(document.querySelectorAll(".home-garage-list .garage-card:not(.full)"));

        cards.forEach((card) => {
          const clonedCard = card.cloneNode(true);
          const btn = clonedCard.querySelector(".rent-button");
          if (btn) btn.textContent = "选择";
          clonedCard.addEventListener("click", () => selectRentGarage(clonedCard));
          rentGarageList.appendChild(clonedCard);
        });
      }

      applyRentGarageControls();
    }

    function applyRentGarageControls() {
      if (!rentGarageList) return;
      const keyword = rentGarageQuery?.value.trim().toLowerCase() || "";
      const cards = Array.from(rentGarageList.querySelectorAll(".garage-card"));

      let visibleCount = 0;
      cards.forEach((card) => {
        const searchableText = card.querySelector(".garage-name")?.textContent.toLowerCase() || "";
        const district = card.querySelector(".garage-stat-row span")?.textContent.trim() || "";
        const inConfiguredArea = ["湖里区", "思明区"].includes(district);
        const areaMatched = rentGarageState.area === "all" || district === rentGarageState.area;
        const visible = inConfiguredArea && areaMatched && (!keyword || searchableText.includes(keyword));
        card.style.display = visible ? "" : "none";
        if (visible) visibleCount += 1;
      });

      const rentFlowScreen = document.querySelector(".rent-flow");
      if (rentFlowScreen) rentFlowScreen.dataset.rentEmpty = visibleCount === 0 ? "true" : "false";
    }

    function updateRentOwnerNextState() {
      if (!rentOwnerNextButton) return;
      rentOwnerNextButton.disabled = !rentFlowState.selectedName;
    }

    function hasCompleteProfile(profile = userProfileState) {
      return isChineseName(profile.name) &&
        isValidMobilePhone(profile.phone) &&
        isValidIdCard(profile.idCard);
    }

    function hasBoundVehicle() {
      return getRentVehicleOptions().length > 0;
    }

    function prepareRentPrerequisite() {
      const profileMissing = !hasCompleteProfile();
      if (rentPrereqPersonal) rentPrereqPersonal.hidden = !profileMissing;
      if (rentPrereqFooter) rentPrereqFooter.hidden = !profileMissing;

      if (profileMissing) {
        if (rentOwnerNameInput) rentOwnerNameInput.value = userProfileState.name || "";
        if (rentOwnerPhoneInput) rentOwnerPhoneInput.value = userProfileState.phone || "";
        if (rentOwnerIdCardInput) rentOwnerIdCardInput.value = userProfileState.idCard || "";
        Object.assign(rentOwnerState, userProfileState);
      }

      if (rentOwnerNextButton && profileMissing) {
        rentOwnerNextButton.textContent = "保存并继续";
      }
      updateRentOwnerNextState();
    }

    function saveRentOwnerProfile() {
      const profile = {
        name: rentOwnerNameInput?.value.trim() || "",
        phone: rentOwnerPhoneInput?.value.trim() || "",
        idCard: rentOwnerIdCardInput?.value.trim().toUpperCase() || "",
      };
      if (!validateProfile(profile, {
        name: rentOwnerNameInput,
        phone: rentOwnerPhoneInput,
        idCard: rentOwnerIdCardInput,
      })) return false;
      Object.assign(userProfileState, profile);
      accountState.profiles[accountState.current] = { ...userProfileState };
      Object.assign(rentOwnerState, profile);
      syncPersonalProfile();
      return true;
    }

    function continueRentVehicleStep() {
      const vehicleOptions = getRentVehicleOptions();
      if (!vehicleOptions.length) {
        openPrerequisiteVehicleForm(false);
        return;
      }
      rentVehicleState.vehicles = selectedRentVehicles().filter((vehicle) => {
        return vehicleOptions.some((option) => vehiclePlateKey(option.dataset.plate || "") === vehiclePlateKey(vehicle.plate));
      });
      syncRentVehiclePicker();
      updateRentVehicleNextState();
      updateRentTermState();
      showTab("rentVehicle");
    }

    function openPrerequisiteVehicleForm(profileRequired) {
      openVehicleForm(null, "rentFlow", { profileRequired });
    }

    function formatRentDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    function rentDateFromPickerState() {
      return new Date(rentDatePickerState.year, rentDatePickerState.month - 1, rentDatePickerState.day);
    }

    function normalizeRentDatePickerState() {
      const daysInSelectedMonth = new Date(rentDatePickerState.year, rentDatePickerState.month, 0).getDate();
      rentDatePickerState.day = Math.min(rentDatePickerState.day, daysInSelectedMonth);
      if (rentDateFromPickerState() < rentDateMinimum) {
        rentDatePickerState.year = rentDateMinimum.getFullYear();
        rentDatePickerState.month = rentDateMinimum.getMonth() + 1;
        rentDatePickerState.day = rentDateMinimum.getDate();
      }
    }

    function syncRentDatePickerState(value = rentStartDateInput?.value) {
      const [year, month, day] = String(value || "").split("-").map(Number);
      if (year && month && day) {
        rentDatePickerState.year = year;
        rentDatePickerState.month = month;
        rentDatePickerState.day = day;
      }
      normalizeRentDatePickerState();
    }

    function renderRentDatePicker() {
      if (!rentDateYearList || !rentDateMonthList || !rentDateDayList) return;
      const minYear = rentDateMinimum.getFullYear();
      const years = Array.from({ length: 3 }, (_, index) => minYear + index);
      const months = Array.from({ length: 12 }, (_, index) => index + 1);
      const days = Array.from({ length: new Date(rentDatePickerState.year, rentDatePickerState.month, 0).getDate() }, (_, index) => index + 1);
      const renderOptions = (values, part, label) => values.map((value) => {
        const isSelected = rentDatePickerState[part] === value;
        const candidate = new Date(
          part === "year" ? value : rentDatePickerState.year,
          part === "month" ? value - 1 : rentDatePickerState.month - 1,
          part === "day" ? value : rentDatePickerState.day,
        );
        const disabled = candidate < rentDateMinimum;
        return `<button class="rent-date-option${isSelected ? " is-selected" : ""}" type="button" data-rent-date-part="${part}" data-rent-date-value="${value}"${disabled ? " disabled" : ""}>${String(value).padStart(part === "year" ? 4 : 2, "0")}${label}</button>`;
      }).join("");
      rentDateYearList.innerHTML = renderOptions(years, "year", "年");
      rentDateMonthList.innerHTML = renderOptions(months, "month", "月");
      rentDateDayList.innerHTML = renderOptions(days, "day", "日");
      requestAnimationFrame(() => {
        [rentDateYearList, rentDateMonthList, rentDateDayList].forEach((list) => {
          list.querySelector(".is-selected")?.scrollIntoView({ block: "center" });
        });
      });
    }

    function openRentDatePicker() {
      const rentVehicleScreen = document.querySelector(".rent-vehicle");
      if (!rentVehicleScreen || !rentDatePickerSheet) return;
      syncRentDatePickerState();
      renderRentDatePicker();
      rentVehicleScreen.dataset.rentDatePicker = "open";
      rentDatePickerSheet.setAttribute("aria-hidden", "false");
    }

    function closeRentDatePicker() {
      const rentVehicleScreen = document.querySelector(".rent-vehicle");
      if (rentVehicleScreen) rentVehicleScreen.dataset.rentDatePicker = "closed";
      rentDatePickerSheet?.setAttribute("aria-hidden", "true");
    }

    function confirmRentDatePicker() {
      normalizeRentDatePickerState();
      const value = formatRentDate(rentDateFromPickerState());
      if (rentStartDateInput) rentStartDateInput.value = value;
      if (rentStartDateDisplay) rentStartDateDisplay.textContent = value;
      updateRentTermState();
      closeRentDatePicker();
    }

    function calculateRentEndDate() {
      if (!rentStartDateInput?.value) return "--";
      return addOrderMonths(rentStartDateInput.value, rentTermState.months);
    }

    function findMonthlyRentOverlap({ community, plate, start, end, excludeOrderId = "" }) {
      const plateKey = vehiclePlateKey(plate || "");
      if (!community || !plateKey || !/^\d{4}-\d{2}-\d{2}$/.test(start) || !/^\d{4}-\d{2}-\d{2}$/.test(end)) {
        return null;
      }

      return orderState.records.find((order) => {
        const stillEffective = !["过期", "终止"].includes(order.rentalStatus) && order.refundStatus !== "已通过";
        return stillEffective &&
          order.id !== excludeOrderId &&
          order.community === community &&
          orderHasVehicle(order, plate) &&
          start <= order.end &&
          end >= order.start;
      }) || null;
    }

    function getRentOverlap() {
      const community = rentFlowState.selectedCommunity || rentFlowState.selectedName;
      const start = rentStartDateInput?.value || "";
      const end = calculateRentEndDate();
      for (const vehicle of selectedRentVehicles()) {
        const order = findMonthlyRentOverlap({ community, plate: vehicle.plate, start, end });
        if (order) return { order, plate: vehicle.plate };
      }
      return null;
    }

    function openRentOverlapDialog(overlap) {
      const order = overlap?.order || overlap;
      const rentVehicleScreen = document.querySelector(".rent-vehicle");
      if (!rentVehicleScreen || !rentOverlapDialog || !order) return;
      const selectedEnd = calculateRentEndDate();
      if (rentOverlapMessage) {
        const plate = overlap?.plate || orderVehicleText(order, { compact: true });
        rentOverlapMessage.textContent = `${plate} 在${order.community}已有 ${order.start} 至 ${order.end} 的月租，所选 ${rentStartDateInput?.value || "--"} 至 ${selectedEnd} 与其重叠。请调整起租日期或选择其他车辆。`;
      }
      rentVehicleScreen.dataset.rentOverlapDialog = "open";
      rentOverlapDialog.setAttribute("aria-hidden", "false");
    }

    function closeRentOverlapDialog() {
      const rentVehicleScreen = document.querySelector(".rent-vehicle");
      if (rentVehicleScreen) rentVehicleScreen.dataset.rentOverlapDialog = "closed";
      rentOverlapDialog?.setAttribute("aria-hidden", "true");
    }

    function updateRentTermState() {
      const parsedMonths = Number.parseInt(rentMonthsInput?.value || "1", 10);
      rentTermState.months = Math.min(12, Math.max(1, Number.isFinite(parsedMonths) ? parsedMonths : 1));
      if (rentMonthsInput && rentMonthsInput.value !== String(rentTermState.months)) {
        rentMonthsInput.value = String(rentTermState.months);
      }

      const endDate = calculateRentEndDate();
      const unitPrice = Number(rentSelectedPrice?.textContent || 0);
      if (rentStartDateDisplay) rentStartDateDisplay.textContent = rentStartDateInput?.value || "请选择开始日期";
      if (rentEndDateLabel) rentEndDateLabel.textContent = endDate;
      if (rentTermPrice) rentTermPrice.textContent = String(unitPrice * rentTermState.months || 0);
      rentMonthOptions.forEach((button) => {
        button.classList.toggle("is-active", Number(button.dataset.rentMonthOption) === rentTermState.months);
      });

      updateRentVehicleNextState();
    }

    function updateRentNoticeNextState() {
      if (!rentNoticeNextButton) return;
      const isLastPage = rentNoticeReadState.page === rentNoticePages.length - 1;
      const readyToContinue = rentNoticeReadState.read && isLastPage && rentNoticeReadState.agreed;
      rentNoticeNextButton.disabled = !readyToContinue;
      rentNoticeNextButton.textContent = !rentNoticeReadState.read
        ? `请阅读 ${rentNoticeReadState.secondsLeft} 秒`
        : !isLastPage ? "请阅读至最后一页" : rentNoticeReadState.agreed ? "同意并继续" : "请勾选并同意";
      rentNoticeAgreementAction?.classList.toggle("is-checked", rentNoticeReadState.agreed);
      rentNoticeAgreementAction?.setAttribute("aria-pressed", String(rentNoticeReadState.agreed));
    }

    function updateRentNoticePage(pageIndex) {
      if (!rentNoticePages.length) return;
      const nextPage = Math.min(rentNoticePages.length - 1, Math.max(0, pageIndex));
      rentNoticeReadState.page = nextPage;
      rentNoticePages.forEach((page, index) => {
        page.classList.toggle("is-active", index === nextPage);
      });
      rentNoticePageDots.forEach((dot, index) => {
        const isActive = index === nextPage;
        dot.classList.toggle("is-active", isActive);
        if (isActive) dot.setAttribute("aria-current", "page");
        else dot.removeAttribute("aria-current");
      });
      if (rentNoticePageStatus) rentNoticePageStatus.textContent = `第 ${nextPage + 1} / ${rentNoticePages.length} 页`;
      if (rentNoticePreviousPageButton) rentNoticePreviousPageButton.disabled = nextPage === 0;
      if (rentNoticeNextPageButton) rentNoticeNextPageButton.disabled = nextPage === rentNoticePages.length - 1;
      updateRentNoticeNextState();
    }

    function startRentNoticeReading() {
      clearTimeout(rentNoticeTimer);
      rentTermState.noticeChecked = false;
      rentNoticeReadState.secondsLeft = 5;
      rentNoticeReadState.read = false;
      rentNoticeReadState.agreed = false;
      rentNoticeReadState.page = 0;
      updateRentNoticePage(0);
      updateRentNoticeNextState();

      const tick = () => {
        rentNoticeReadState.secondsLeft -= 1;
        if (rentNoticeReadState.secondsLeft <= 0) {
          rentNoticeReadState.secondsLeft = 0;
          rentNoticeReadState.read = true;
          updateRentNoticeNextState();
          return;
        }
        updateRentNoticeNextState();
        rentNoticeTimer = setTimeout(tick, 1000);
      };

      rentNoticeTimer = setTimeout(tick, 1000);
    }

    function syncRentVehiclePicker() {
      const selectedVehicles = selectedRentVehicles();
      if (rentSelectedCount) rentSelectedCount.textContent = `已选 ${selectedVehicles.length}/${RENT_VEHICLE_LIMIT} 辆`;
      if (rentSelectedVehicles) {
        rentSelectedVehicles.replaceChildren();
        if (!selectedVehicles.length) {
          const empty = document.createElement("span");
          empty.className = "rent-vehicle-picker-empty";
          empty.innerHTML = '<span class="rent-vehicle-picker-icon"><svg class="icon sm"><use href="#i-car"></use></svg></span><strong>请选择车辆</strong><span class="rent-vehicle-picker-arrow">›</span>';
          rentSelectedVehicles.appendChild(empty);
        } else {
          selectedVehicles.forEach((vehicle) => {
            const line = document.createElement("span");
            line.className = "rent-vehicle-picker-line";
            const icon = document.createElement("span");
            icon.className = "rent-vehicle-picker-icon";
            icon.innerHTML = '<svg class="icon sm"><use href="#i-car"></use></svg>';
            const copy = document.createElement("span");
            copy.className = "rent-vehicle-picker-copy";
            const plate = document.createElement("strong");
            plate.textContent = vehicle.plate;
            const color = document.createElement("small");
            color.textContent = vehicle.color || "车牌颜色未设置";
            const arrow = document.createElement("span");
            arrow.className = "rent-vehicle-picker-arrow";
            arrow.textContent = "›";
            copy.append(plate, color);
            line.append(icon, copy, arrow);
            rentSelectedVehicles.appendChild(line);
          });
        }
      }
      const options = getRentVehicleOptions();
      document.querySelectorAll("[data-rent-vehicle-option]").forEach((option) => {
        const belongsToCurrentAccount = option.dataset.account === accountState.current;
        option.hidden = !belongsToCurrentAccount;
        option.classList.toggle("is-account-hidden", !belongsToCurrentAccount);
        option.setAttribute("aria-hidden", belongsToCurrentAccount ? "false" : "true");
      });
      if (rentVehicleSelectPage) rentVehicleSelectPage.dataset.rentVehicleEmpty = options.length === 0 ? "true" : "false";
      options.forEach((option) => {
        const selected = isRentVehicleSelected(option.dataset.plate || "");
        option.classList.toggle("is-selected", selected);
        option.setAttribute("aria-checked", selected ? "true" : "false");
      });
      if (rentVehiclePickerComplete) {
        rentVehiclePickerComplete.disabled = selectedVehicles.length === 0;
        rentVehiclePickerComplete.textContent = selectedVehicles.length
          ? `完成（${selectedVehicles.length}/${RENT_VEHICLE_LIMIT}）`
          : "完成";
      }
    }

    function selectRentGarage(card) {
      if (!ensureAuthenticated()) return;
      rentFlowState.selectedName = card.querySelector(".garage-name")?.textContent.trim() || "";
      const project = communityProjectCatalog[rentFlowState.selectedName];
      if (!project) {
        showToast("该小区暂未配置项目管理类型");
        return;
      }
      const garageMeta = card.querySelector(".garage-sub")?.textContent.trim() || "";
      const garagePriceText = card.querySelector(".price")?.textContent.match(/\d+/)?.[0] || "--";
      rentFlowState.selectedCommunity = rentFlowState.selectedName;
      rentFlowState.selectedGarage = garageMeta.split(" · ")[0] || garageMeta;
      const district = card.querySelector(".garage-stat-row span")?.textContent.trim() || "";
      const street = garageStreetByCommunity[rentFlowState.selectedName] || "";
      rentFlowState.selectedLocation = [district, street, rentFlowState.selectedGarage].filter(Boolean).join(" · ");
      rentFlowState.selectedPrice = Number(garagePriceText) || 0;
      rentFlowState.selectedCommunityId = card.dataset.communityId || project.id;
      rentFlowState.selectedProjectName = card.dataset.projectName || project.projectName;
      rentFlowState.selectedProjectType = card.dataset.projectType || project.projectType;
      rentVehicleState.vehicles = [];
      rentGarageList?.querySelectorAll(".garage-card").forEach((item) => {
        const active = item === card;
        item.classList.toggle("is-selected", active);
        const btn = item.querySelector(".rent-button");
        if (btn) btn.textContent = active ? "已选" : "选择";
      });
      if (rentSelectedName) rentSelectedName.textContent = rentFlowState.selectedName;
      if (rentSelectedPrice) rentSelectedPrice.textContent = garagePriceText;
      if (rentOwnerGarageName) rentOwnerGarageName.textContent = rentFlowState.selectedName;
      rentTermState.noticeChecked = false;
      clearTimeout(rentNoticeTimer);
      const profileMissing = !hasCompleteProfile();
      const vehicleMissing = !hasBoundVehicle();
      if (profileMissing && vehicleMissing) {
        openPrerequisiteVehicleForm(true);
        return;
      }
      if (profileMissing) {
        prepareRentPrerequisite();
        showTab("rentOwner");
        return;
      }
      if (vehicleMissing) {
        openPrerequisiteVehicleForm(false);
        return;
      }
      continueRentVehicleStep();
    }

    function updateRentVehicleNextState() {
      if (!rentVehicleNextButton) return;
      rentVehicleNextButton.disabled = !rentFlowState.selectedName || selectedRentVehicles().length === 0 || !rentStartDateInput?.value;
    }

    function syncRentConfirm() {
      if (confirmGarage) confirmGarage.textContent = rentFlowState.selectedName || "--";
      if (confirmVehicles) confirmVehicles.textContent = rentVehiclesText(selectedRentVehicles(), { includeColor: true });
      if (confirmStart) confirmStart.textContent = rentStartDateInput?.value || "--";
      if (confirmEnd) confirmEnd.textContent = calculateRentEndDate();
      if (confirmMonths) confirmMonths.textContent = String(rentTermState.months);
      if (confirmPrice) confirmPrice.textContent = rentTermPrice?.textContent || "--";
      if (confirmNotice) confirmNotice.textContent = rentTermState.noticeChecked ? "已阅读并同意" : "待阅读";
      if (rentSubmitButton) rentSubmitButton.disabled = !rentTermState.noticeChecked;
    }

    function isActiveMonthlyOrder(order) {
      return order.rentalStatus === "有效"
        && order.refundStatus !== "已通过";
    }

    function vehicleHasLockedMonthlyRental(plate) {
      const key = vehiclePlateKey(plate);
      return orderState.records.some((order) => {
        return Boolean(key) && orderHasVehicle(order, plate) &&
          ["有效", "待生效"].includes(order.rentalStatus) &&
          order.refundStatus !== "已通过";
      });
    }

    function hasHomeActiveMonthlyOrder(order) {
      return order.rentalStatus === "有效"
        && order.refundStatus === "未申请";
    }

    function vehicleHasActiveMonthlyRental(plate) {
      const key = vehiclePlateKey(plate);
      return orderState.records.some((order) => {
        return Boolean(key) && orderHasVehicle(order, plate) && isActiveMonthlyOrder(order);
      });
    }

    function syncVehicleMonthlyState() {
      vehicleList?.querySelectorAll("[data-vehicle-card]").forEach((card) => {
        const active = vehicleHasActiveMonthlyRental(card.dataset.plate || "");
        card.dataset.monthlyActive = active ? "true" : "false";
        const tag = card.querySelector(".vehicle-bind-tag");
        if (tag) {
          tag.hidden = !active;
          tag.textContent = active ? "月租使用中" : "";
          tag.classList.toggle("monthly-active", active);
        }
        const plate = card.dataset.plate || "车辆";
        card.setAttribute("aria-label", `${active ? "查看月租使用中" : "查看"}${plate}车辆信息`);
      });
    }

    function setVehicleFormLocked(locked) {
      if (!vehicleForm) return;
      vehicleForm.dataset.vehicleLocked = locked ? "true" : "false";
      [...plateCharacterButtons, plateColorSheetAction, ...vehicleGradeButtons]
        .filter(Boolean)
        .forEach((control) => { control.disabled = locked; });
      if (vehicleAppearanceInput) vehicleAppearanceInput.readOnly = locked;
      vehiclePhotoGrid?.querySelectorAll("[data-vehicle-photo-remove], [data-vehicle-photo-upload]").forEach((button) => { button.disabled = locked; });
      if (vehicleLockedMessage) vehicleLockedMessage.hidden = true;
      if (locked) {
        closePlateKeyboard();
        closePlateColorSheet();
      }
    }

    function canSwapOrderVehicle(order) {
      return order?.rentalStatus === "有效" &&
        !["审批中", "已通过"].includes(order.refundStatus) &&
        getOrderVehicles(order).length > 0;
    }

    function canAddOrderVehicle(order) {
      return canSwapOrderVehicle(order) && getOrderVehicles(order).length < RENT_VEHICLE_LIMIT;
    }

    function getVehicleSwapRelatedOrders() {
      const sourceOrder = getOrderById(vehicleSwapState.orderId);
      const referencePlate = vehicleSwapState.fromPlate || getOrderVehicles(sourceOrder)[0]?.plate || "";
      if (!sourceOrder || !referencePlate) return [];
      return orderState.records.filter((order) => {
        return order.community === sourceOrder.community &&
          ["有效", "待生效"].includes(order.rentalStatus) &&
          !["审批中", "已通过"].includes(order.refundStatus) &&
          orderHasVehicle(order, referencePlate);
      });
    }

    function vehicleFromCard(card) {
      return normalizeRegisteredVehicle({
        plate: card?.dataset.plate || "",
        color: card?.dataset.plateColor || "",
        colorCode: card?.dataset.plateColorCode || "",
      });
    }

    function renderVehicleSwap() {
      const order = getOrderById(vehicleSwapState.orderId);
      const relatedOrders = getVehicleSwapRelatedOrders();
      if (!order) return;
      const isUnbinding = vehicleSwapState.mode === "unbind";
      const isAdding = vehicleSwapState.mode === "add";
      const canUnbind = getOrderVehicles(order).length > 1;
      const latestEnd = relatedOrders
        .map((item) => item.end)
        .sort((first, second) => String(second).localeCompare(String(first)))[0] || order.end;
      if (vehicleSwapCommunity) vehicleSwapCommunity.textContent = order.community;
      if (vehicleSwapTerm) vehicleSwapTerm.textContent = `${order.start} 至 ${latestEnd}`;
      if (vehicleSwapFrom) vehicleSwapFrom.textContent = vehicleSwapState.fromPlate;
      if (vehicleSwapFromRow) vehicleSwapFromRow.hidden = isAdding;
      if (vehicleSwapTargetSection) vehicleSwapTargetSection.hidden = isUnbinding;
      if (vehicleSwapTargetHeading) vehicleSwapTargetHeading.textContent = isAdding ? "新增办理车辆" : "变更为";
      if (vehicleSwapUnbindNote) vehicleSwapUnbindNote.hidden = !isUnbinding;
      const showsUnbindAction = !isUnbinding && !isAdding && canUnbind;
      if (vehicleSwapUnbindAction) vehicleSwapUnbindAction.hidden = !showsUnbindAction;
      if (vehicleSwapFooter) {
        vehicleSwapFooter.dataset.vehicleSwapMode = isUnbinding ? "unbind" : isAdding ? "add" : "swap";
        vehicleSwapFooter.dataset.hasUnbind = showsUnbindAction ? "true" : "false";
        vehicleSwapFooter.closest(".vehicle-swap-page")?.setAttribute("data-vehicle-swap-actions", showsUnbindAction ? "two" : "one");
      }
      if (vehicleSwapTargetPlate) vehicleSwapTargetPlate.textContent = vehicleSwapState.toVehicle?.plate || "请选择车辆";
      if (vehicleSwapTargetColor) {
        vehicleSwapTargetColor.hidden = !vehicleSwapState.toVehicle?.color;
        vehicleSwapTargetColor.textContent = vehicleSwapState.toVehicle?.color || "";
      }
      if (vehicleSwapSubmit) {
        vehicleSwapSubmit.textContent = isUnbinding ? "确认移除" : isAdding ? "确认添加" : "确认变更";
        vehicleSwapSubmit.disabled = isUnbinding ? !canUnbind : !vehicleSwapState.toVehicle;
      }
    }

    function renderVehicleSwapSources() {
      if (!vehicleSwapSourceOptions) return;
      const order = getOrderById(vehicleSwapState.orderId);
      const vehicles = getOrderVehicles(order);
      vehicleSwapSourceOptions.innerHTML = vehicles.map((vehicle) => {
        return `<button class="vehicle-swap-option" type="button" data-vehicle-swap-source-plate="${escapeHtml(vehicle.plate)}" data-vehicle-swap-source-color="${escapeHtml(vehicle.color || "")}" data-vehicle-swap-source-color-code="${escapeHtml(vehicle.colorCode || "")}">
          <span class="vehicle-option-icon"><svg class="icon sm"><use href="#i-car"></use></svg></span>
          <span class="vehicle-option-copy"><strong>${escapeHtml(vehicle.plate)}</strong><small>${escapeHtml(vehicle.color || "车牌颜色未设置")}</small></span>
          <span class="vehicle-swap-target-arrow">›</span>
        </button>`;
      }).join("");
      if (canAddOrderVehicle(order)) {
        vehicleSwapSourceOptions.insertAdjacentHTML("beforeend", `<button class="vehicle-swap-add" type="button" data-vehicle-swap-add>
          <span class="vehicle-option-icon">+</span>
          <span class="vehicle-option-copy"><strong>新增办理车辆</strong></span>
          <span class="vehicle-swap-target-arrow">›</span>
        </button>`);
      }
    }

    function openVehicleSwapFromOrder() {
      if (!ensureAuthenticated()) return;
      const order = getOrderById();
      if (!canSwapOrderVehicle(order)) {
        showToast("当前订单不可变更车辆");
        return;
      }
      vehicleSwapState.orderId = order.id;
      vehicleSwapState.fromPlate = "";
      vehicleSwapState.toVehicle = null;
      vehicleSwapState.mode = "swap";
      renderVehicleSwapSources();
      showTab("vehicleSwapSource");
    }

    function selectVehicleSwapSource(option) {
      vehicleSwapState.fromPlate = option.dataset.vehicleSwapSourcePlate || "";
      vehicleSwapState.toVehicle = null;
      vehicleSwapState.mode = "swap";
      renderVehicleSwap();
      showTab("vehicleSwap");
    }

    function openAddOrderVehicle() {
      const order = getOrderById(vehicleSwapState.orderId);
      if (!canAddOrderVehicle(order)) {
        showToast(`本订单最多可办理 ${RENT_VEHICLE_LIMIT} 辆车辆`);
        return;
      }
      vehicleSwapState.fromPlate = "";
      vehicleSwapState.toVehicle = null;
      vehicleSwapState.mode = "add";
      renderVehicleSwapOptions();
      showTab("vehicleSwapSelect");
    }

    function prepareVehicleSwapUnbind() {
      const order = getOrderById(vehicleSwapState.orderId);
      if (getOrderVehicles(order).length <= 1) {
        showToast("月租订单至少保留一辆通行车辆");
        return;
      }
      vehicleSwapState.mode = "unbind";
      vehicleSwapState.toVehicle = null;
      renderVehicleSwap();
    }

    function returnFromVehicleSwap() {
      renderOrderList();
      showTab("orderList");
    }

    function eligibleVehicleSwapCards() {
      const occupiedPlateKeys = new Set(
        getVehicleSwapRelatedOrders().flatMap((order) => getOrderVehicles(order).map((vehicle) => vehiclePlateKey(vehicle.plate))),
      );
      return Array.from(vehicleList?.querySelectorAll("[data-vehicle-card]") || []).filter((card) => {
        return card.dataset.account === accountState.current &&
          !occupiedPlateKeys.has(vehiclePlateKey(card.dataset.plate || ""));
      });
    }

    function renderVehicleSwapOptions() {
      if (!vehicleSwapOptions) return;
      if (vehicleSwapPickerTitle) vehicleSwapPickerTitle.textContent = vehicleSwapState.mode === "add" ? "选择办理车辆" : "选择新车辆";
      const cards = eligibleVehicleSwapCards();
      vehicleSwapOptions.innerHTML = "";
      cards.forEach((card) => {
        const vehicle = vehicleFromCard(card);
        const overlap = findVehicleSwapOverlapFor(vehicle);
        const option = document.createElement("button");
        option.type = "button";
        option.className = "vehicle-swap-option";
        option.dataset.vehicleSwapPlate = vehicle.plate;
        option.dataset.vehicleSwapColor = vehicle.color;
        option.dataset.vehicleSwapColorCode = vehicle.colorCode;
        option.setAttribute("role", "radio");
        const selected = vehiclePlateKey(vehicle.plate) === vehiclePlateKey(vehicleSwapState.toVehicle?.plate || "");
        option.classList.toggle("is-selected", selected);
        option.classList.toggle("is-disabled", Boolean(overlap));
        option.disabled = Boolean(overlap);
        option.setAttribute("aria-checked", selected && !overlap ? "true" : "false");
        const vehicleHint = overlap
          ? "该车辆在本小区已有重叠月租，暂不能选择"
          : vehicle.color || "车牌颜色未设置";
        option.innerHTML = `<span class="vehicle-option-icon"><svg class="icon sm"><use href="#i-car"></use></svg></span><span class="vehicle-option-copy"><strong>${vehicle.plate}</strong><small class="${overlap ? "is-error" : ""}">${vehicleHint}</small></span><span class="vehicle-option-check">✓</span>`;
        vehicleSwapOptions.appendChild(option);
      });
      if (vehicleSwapEmpty) vehicleSwapEmpty.hidden = cards.length > 0;
    }

    function selectVehicleSwap(option) {
      vehicleSwapState.toVehicle = normalizeRegisteredVehicle({
        plate: option.dataset.vehicleSwapPlate,
        color: option.dataset.vehicleSwapColor,
        colorCode: option.dataset.vehicleSwapColorCode,
      });
      renderVehicleSwap();
      showTab("vehicleSwap");
    }

    function findVehicleSwapOverlapFor(targetVehicle) {
      if (!targetVehicle?.plate) return null;
      for (const order of getVehicleSwapRelatedOrders()) {
        const overlap = findMonthlyRentOverlap({
          community: order.community,
          plate: targetVehicle.plate,
          start: order.start,
          end: order.end,
          excludeOrderId: order.id,
        });
        if (overlap) return overlap;
      }
      return null;
    }

    function findVehicleSwapOverlap() {
      return findVehicleSwapOverlapFor(vehicleSwapState.toVehicle);
    }

    function updateOrderVehicles(order, vehicles) {
      const primaryVehicle = vehicles[0] || { plate: "--", color: "", colorCode: "" };
      order.vehicles = vehicles;
      order.vehicleId = vehicles.map((vehicle) => `VEHICLE-${vehicle.plate.replace(/\s+/g, "")}`).join(",");
      order.plate = primaryVehicle.plate;
      order.color = primaryVehicle.color;
      order.colorCode = primaryVehicle.colorCode;
      order.vehicleCount = vehicles.length;
    }

    function finishVehicleOrderChange(message) {
      resetVehicleForm();
      updateVehicleCollection();
      renderOrderList();
      syncHomeMonthlyCard();
      vehicleSwapState.fromPlate = "";
      vehicleSwapState.toVehicle = null;
      vehicleSwapState.mode = "swap";
      renderVehicleSwapSources();
      showTab("vehicleSwapSource");
      showToast(message);
    }

    function submitVehicleOrderUnbind() {
      const relatedOrders = getVehicleSwapRelatedOrders();
      if (!relatedOrders.length || relatedOrders.some((order) => getOrderVehicles(order).length <= 1)) {
        showToast("月租订单至少保留一辆通行车辆");
        return;
      }

      const changedAt = "2026-08-25 10:30";
      relatedOrders.forEach((order) => {
        const nextVehicles = getOrderVehicles(order).filter((vehicle) => {
          return vehiclePlateKey(vehicle.plate) !== vehiclePlateKey(vehicleSwapState.fromPlate);
        });
        updateOrderVehicles(order, nextVehicles);
        order.vehicleChangeRecords = Array.isArray(order.vehicleChangeRecords) ? order.vehicleChangeRecords : [];
        order.vehicleChangeRecords.push({
          type: "unbind",
          from: vehicleSwapState.fromPlate,
          changedAt,
        });
      });
      finishVehicleOrderChange("车辆已移除，通行权限已取消");
    }

    function submitVehicleOrderAdd() {
      const sourceOrder = getOrderById(vehicleSwapState.orderId);
      const relatedOrders = getVehicleSwapRelatedOrders();
      if (!canAddOrderVehicle(sourceOrder) || !relatedOrders.length) {
        showToast(`本订单最多可办理 ${RENT_VEHICLE_LIMIT} 辆车辆`);
        return;
      }
      if (relatedOrders.some((order) => getOrderVehicles(order).length >= RENT_VEHICLE_LIMIT)) {
        showToast(`本订单最多可办理 ${RENT_VEHICLE_LIMIT} 辆车辆`);
        return;
      }
      const overlap = findVehicleSwapOverlap();
      if (overlap) {
        showToast("该车辆在本小区已有重叠月租，暂不能办理");
        return;
      }

      const changedAt = "2026-08-25 10:30";
      relatedOrders.forEach((order) => {
        const nextVehicles = [...getOrderVehicles(order), { ...vehicleSwapState.toVehicle }];
        updateOrderVehicles(order, nextVehicles);
        order.vehicleChangeRecords = Array.isArray(order.vehicleChangeRecords) ? order.vehicleChangeRecords : [];
        order.vehicleChangeRecords.push({
          type: "add",
          to: { ...vehicleSwapState.toVehicle },
          changedAt,
        });
      });
      finishVehicleOrderChange("办理车辆已添加，新车辆已开通月租通行");
    }

    function submitVehicleSwap() {
      if (!ensureAuthenticated()) return;
      if (vehicleSwapState.mode === "unbind") return submitVehicleOrderUnbind();
      if (!vehicleSwapState.toVehicle) return;
      if (vehicleSwapState.mode === "add") return submitVehicleOrderAdd();
      const relatedOrders = getVehicleSwapRelatedOrders();
      if (!relatedOrders.length) {
        showToast("该月租当前不可变更车辆");
        return;
      }
      const overlap = findVehicleSwapOverlap();
      if (overlap) {
        showToast("新车辆在该小区已有重叠月租，暂不能变更");
        return;
      }

      const changedAt = "2026-08-25 10:30";
      relatedOrders.forEach((order) => {
        const previousVehicles = getOrderVehicles(order);
        const nextVehicles = previousVehicles.map((vehicle) => {
          return vehiclePlateKey(vehicle.plate) === vehiclePlateKey(vehicleSwapState.fromPlate)
            ? { ...vehicleSwapState.toVehicle }
            : vehicle;
        });
        updateOrderVehicles(order, nextVehicles);
        order.vehicleChangeRecords = Array.isArray(order.vehicleChangeRecords) ? order.vehicleChangeRecords : [];
        order.vehicleChangeRecords.push({
          from: vehicleSwapState.fromPlate,
          to: { ...vehicleSwapState.toVehicle },
          changedAt,
        });
      });

      finishVehicleOrderChange("车辆变更成功，新车辆已开通月租通行");
    }

    function remainingMonthlyDays(endDate) {
      const end = new Date(`${endDate}T23:59:59`);
      const now = new Date("2026-08-25T00:00:00");
      return Math.max(0, Math.ceil((end - now) / 86400000));
    }

    function syncHomeMonthlyCard() {
      const order = orderState.records.find(hasHomeActiveMonthlyOrder);
      if (!homeRentCard) return;
      homeRentCard.hidden = false;
      if (homeRentActive) homeRentActive.hidden = !order;
      if (homeRentEmpty) homeRentEmpty.hidden = Boolean(order);
      if (!order) {
        homeRentRenew?.removeAttribute("data-order-renew-id");
        homeRentStatus?.classList.remove("refund");
        return;
      }

      const latestPeriod = orderState.records
        .filter((candidate) => {
          return sameOrderVehicleSet(candidate, order) &&
            candidate.community === order.community &&
            ["有效", "待生效"].includes(candidate.rentalStatus) &&
            candidate.refundStatus === "未申请";
        })
        .sort((a, b) => String(b.end).localeCompare(String(a.end)))[0] || order;

      if (homeRentStatus) {
        homeRentStatus.textContent = "月租有效";
        homeRentStatus.classList.remove("refund");
      }
      if (homeRentPlate) homeRentPlate.textContent = orderVehicleText(order, { compact: true });
      if (homeRentPlace) homeRentPlace.textContent = order.community;
      if (homeRentRenew) homeRentRenew.dataset.orderRenewId = latestPeriod.id;
      if (homeRentRemaining) homeRentRemaining.textContent = `${remainingMonthlyDays(latestPeriod.end)} 天`;
      if (homeRentEnd) homeRentEnd.textContent = latestPeriod.end;
    }

    function createMonthlyRentOrder() {
      const sequence = String(orderState.records.length + 1).padStart(4, "0");
      const orderNo = `AS20260825${sequence}`;
      const vehicles = selectedRentVehicles();
      const primaryVehicle = vehicles[0] || { plate: "--", color: "", colorCode: "" };
      const order = {
        id: orderNo,
        orderNo,
        type: "新办",
        community: rentFlowState.selectedCommunity || rentFlowState.selectedName,
        garage: rentFlowState.selectedGarage || "--",
        vehicleId: vehicles.map((vehicle) => `VEHICLE-${vehicle.plate.replace(/\s+/g, "")}`).join(","),
        plate: primaryVehicle.plate,
        color: primaryVehicle.color,
        colorCode: primaryVehicle.colorCode,
        vehicles,
        vehicleCount: vehicles.length,
        start: rentStartDateInput?.value || "--",
        end: calculateRentEndDate(),
        months: rentTermState.months,
        amount: Number(rentTermPrice?.textContent || rentFlowState.selectedPrice || 0),
        createdAt: "2026-08-25 10:15",
        paymentAt: "2026-08-25 10:18",
        rentalStatus: "有效",
        passStatus: "已开通",
        refundStatus: "未申请",
        invoiceStatus: "未申请",
        communityId: rentFlowState.selectedCommunityId,
        projectName: rentFlowState.selectedProjectName,
        projectType: rentFlowState.selectedProjectType,
        ownerNameSnapshot: userProfileState.name,
        ownerPhoneSnapshot: userProfileState.phone,
        idCardNoSnapshot: userProfileState.idCard,
        payerNameSnapshot: userProfileState.name,
        payerPhoneSnapshot: userProfileState.phone,
      };
      orderState.records.unshift(order);
      orderState.activeId = order.id;
      return order;
    }

    function updateVehicleCollection() {
      syncVehicleMonthlyState();
      const allCards = Array.from(vehicleList?.querySelectorAll("[data-vehicle-card]") || []);
      const cards = allCards.filter((card) => card.dataset.account === accountState.current);
      let visibleCount = 0;

      allCards.forEach((card) => {
        const visible = card.dataset.account === accountState.current;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (personalVehicleCount) personalVehicleCount.textContent = String(cards.length);
      const vehicleEmpty = vehicleManageScreen?.querySelector(".vehicle-empty");
      if (vehicleEmpty) vehicleEmpty.textContent = cards.length === 0 ? "暂未办理车辆" : "暂无其他办理车辆";
      if (vehicleManageScreen) vehicleManageScreen.dataset.vehicleEmpty = visibleCount === 0 ? "true" : "false";
    }

    function syncVehicleChoiceState() {
      vehiclePlateColorButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.vehiclePlateColor === vehicleFormState.plateColor);
      });
      vehicleGradeButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.vehicleGradeCode === vehicleFormState.gradeCode);
      });
      if (plateColorLabel) plateColorLabel.textContent = vehicleFormState.plateColor;
      if (plateColorDot) {
        plateColorDot.className = `plate-color-dot${plateColorClass(vehicleFormState.plateColorCode) === "blue" ? "" : ` ${plateColorClass(vehicleFormState.plateColorCode)}`}`;
      }
    }

    function normalizePlateColor(label) {
      return {
        "蓝牌": "蓝色车牌",
        "黄牌": "黄色车牌",
        "黑牌": "黑色车牌",
        "白牌": "白色车牌",
        "绿牌": "小型新能源",
      }[label] || label || "蓝色车牌";
    }

    function plateColorCodeFor(label) {
      return {
        "黄牌": "01", "黄色车牌": "01",
        "蓝牌": "02", "蓝色车牌": "02",
        "黑牌": "03", "黑色车牌": "03",
        "白牌": "20", "白色车牌": "20",
        "绿牌": "26", "小型新能源": "26", "大型新能源": "26",
      }[label] || "02";
    }

    function gradeCodeFor(label) {
      return { "其他": "0", "小型车": "1", "大型车": "2", "中型车": "3" }[label] || "1";
    }

    function plateColorClass(code) {
      return { "01": "yellow", "03": "black", "20": "white", "26": "green" }[code] || "blue";
    }

    function plateSuffixLimit() {
      return vehicleFormState.plateColorCode === "26" ? 6 : 5;
    }

    function cleanPlateSuffix(value) {
      const allowed = /[A-HJ-NP-Z0-9]/;
      return String(value || "")
        .toUpperCase()
        .split("")
        .filter((character) => allowed.test(character))
        .join("")
        .slice(0, plateSuffixLimit());
    }

    function splitVehiclePlate(plate) {
      const compact = vehiclePlateKey(plate);
      return {
        province: compact.slice(0, 1) || "闽",
        letter: /[A-HJ-NP-Z]/.test(compact.slice(1, 2)) ? compact.slice(1, 2) : "D",
        suffix: compact.slice(2),
      };
    }

    function plateKeyboardCharacters() {
      if (vehicleFormState.activePlateSlot === "province") {
        return "京沪粤津冀晋蒙辽吉黑苏浙皖闽赣鲁豫鄂湘桂琼渝川贵云藏陕甘青宁新";
      }
      if (vehicleFormState.activePlateSlot === "letter") return "ABCDEFGHJKLMNPQRSTUVWXYZ";
      return "1234567890ABCDEFGHJKLMNPQRSTUVWXYZ";
    }

    function plateKeyboardMeta() {
      if (vehicleFormState.activePlateSlot === "province") return { title: "选择省份简称", count: "第1位" };
      if (vehicleFormState.activePlateSlot === "letter") return { title: "选择地区字母", count: "第2位" };
      return { title: "输入车牌后续号码", count: `${vehicleFormState.plateSuffix.length}/${plateSuffixLimit()}` };
    }

    function renderPlateKeyboard() {
      if (!plateKeyboardKeys) return;
      const meta = plateKeyboardMeta();
      if (plateKeyboardTitle) plateKeyboardTitle.textContent = meta.title;
      if (plateKeyboardCount) plateKeyboardCount.textContent = meta.count;
      plateKeyboardKeys.innerHTML = "";
      [...plateKeyboardCharacters()].forEach((character) => {
        const key = document.createElement("button");
        key.type = "button";
        key.className = "plate-key";
        key.dataset.plateKey = character;
        key.textContent = character;
        plateKeyboardKeys.appendChild(key);
      });
    }

    function syncPlateInput() {
      const limit = plateSuffixLimit();
      vehicleFormState.plateSuffix = cleanPlateSuffix(vehicleFormState.plateSuffix);
      if (vehiclePlateInput) {
        vehiclePlateInput.value = vehicleFormState.plateSuffix;
        vehiclePlateInput.maxLength = limit;
        vehiclePlateInput.placeholder = vehicleFormState.plateColorCode === "26" ? "请输入后6位" : "请输入后5位";
      }
      plateTailCells.forEach((cell, index) => {
        const character = vehicleFormState.plateSuffix[index] || "";
        const isVisible = index < limit;
        const isActive = document.body.dataset.currentTab === "vehicleForm"
          && vehicleFormState.activePlateSlot === "suffix"
          && vehicleForm?.dataset.plateKeyboard === "open"
          && index === Math.min(vehicleFormState.plateSuffix.length, limit - 1);
        cell.hidden = !isVisible;
        cell.textContent = character;
        cell.classList.toggle("is-empty", !character);
        cell.classList.toggle("is-active-cell", isActive);
      });
      plateCharacterButtons.forEach((button) => {
        const slot = button.dataset.plateCharacter;
        const value = slot === "province"
          ? vehicleFormState.plateProvince
          : vehicleFormState.plateLetter;
        const label = button.querySelector("[data-plate-character-value]");
        if (label) label.textContent = value;
        button.classList.toggle("is-empty", !value);
        button.classList.toggle("is-active-cell", document.body.dataset.currentTab === "vehicleForm" && slot === vehicleFormState.activePlateSlot && vehicleForm?.dataset.plateKeyboard === "open");
      });
      plateCharacterValues.forEach((value) => value.setAttribute("aria-hidden", value.textContent ? "false" : "true"));
      if (vehiclePlateShell) {
        ["is-yellow", "is-black", "is-white", "is-green"].forEach((className) => vehiclePlateShell.classList.remove(className));
        const colorClass = plateColorClass(vehicleFormState.plateColorCode);
        if (colorClass !== "blue") vehiclePlateShell.classList.add(`is-${colorClass}`);
      }
      if (vehiclePlateInput && vehicleFormState.plateProvince && vehicleFormState.plateLetter && vehicleFormState.plateSuffix.length === limit) {
        clearFieldError(vehiclePlateInput);
      }
      renderPlateKeyboard();
    }

    function openPlateKeyboard(slot = "province") {
      if (!vehicleForm || vehicleForm.dataset.vehicleLocked === "true") return;
      vehicleFormState.activePlateSlot = ["province", "letter", "suffix"].includes(slot) ? slot : "province";
      vehicleForm.dataset.plateKeyboard = "open";
      vehicleForm.dataset.plateColorSheet = "closed";
      vehiclePlateShell?.classList.add("is-keyboard-open");
      syncPlateInput();
    }

    function closePlateKeyboard() {
      if (!vehicleForm) return;
      vehicleForm.dataset.plateKeyboard = "closed";
      vehiclePlateShell?.classList.remove("is-keyboard-open");
    }

    function openPlateColorSheet() {
      if (!vehicleForm || vehicleForm.dataset.vehicleLocked === "true") return;
      closePlateKeyboard();
      vehicleForm.dataset.plateColorSheet = "open";
      syncVehicleChoiceState();
    }

    function closePlateColorSheet() {
      if (!vehicleForm) return;
      vehicleForm.dataset.plateColorSheet = "closed";
    }

    function buildPlateKeyboard() {
      renderPlateKeyboard();
    }

    function renderVehiclePhotos() {
      if (!vehiclePhotoGrid) return;
      vehiclePhotoGrid.innerHTML = "";
      vehicleFormState.photos.forEach((photo, index) => {
        const item = document.createElement("div");
        item.className = "vehicle-photo-item";

        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "vehicle-photo-thumb";
        thumb.dataset.vehiclePhotoThumb = String(index);
        thumb.setAttribute("aria-label", `预览车辆照片 ${index + 1}`);
        thumb.innerHTML = `<span class="vehicle-photo-image photo-sample-${photo.variant}"></span>`;

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "vehicle-photo-remove";
        remove.dataset.vehiclePhotoRemove = String(index);
        remove.setAttribute("aria-label", `删除车辆照片 ${index + 1}`);
        remove.textContent = "×";

        item.append(thumb, remove);
        vehiclePhotoGrid.appendChild(item);
      });

      if (vehicleFormState.photos.length < 6) {
        const upload = document.createElement("button");
        upload.type = "button";
        upload.className = "vehicle-photo-upload";
        upload.dataset.vehiclePhotoUpload = "true";
        upload.innerHTML = '<svg class="icon"><use href="#i-camera"></use></svg><span>上传</span>';
        vehiclePhotoGrid.appendChild(upload);
      }

      if (vehiclePhotoCount) vehiclePhotoCount.textContent = `${vehicleFormState.photos.length}/6`;
      if (vehicleForm?.dataset.vehicleLocked === "true") {
        vehiclePhotoGrid.querySelectorAll("[data-vehicle-photo-remove], [data-vehicle-photo-upload]").forEach((button) => { button.disabled = true; });
      }
    }

    function addVehiclePhoto() {
      if (vehicleForm?.dataset.vehicleLocked === "true") return;
      if (vehicleFormState.photos.length >= 6) {
        showToast("最多上传6张照片");
        return;
      }
      vehicleFormState.photos.push({ variant: (vehicleFormState.photos.length % 6) + 1 });
      renderVehiclePhotos();
      showToast(`已添加第${vehicleFormState.photos.length}张照片`);
    }

    function openVehiclePhotoPreview(index) {
      const photo = vehicleFormState.photos[index];
      if (!photo || !vehiclePhotoPreview || !vehiclePhotoPreviewImage) return;
      vehiclePhotoPreviewImage.className = `vehicle-photo-preview-image photo-sample-${photo.variant}`;
      if (vehiclePhotoPreviewLabel) vehiclePhotoPreviewLabel.textContent = `车辆照片 ${index + 1}/${vehicleFormState.photos.length}`;
      vehiclePhotoPreview.dataset.open = "true";
      vehiclePhotoPreview.setAttribute("aria-hidden", "false");
    }

    function closeVehiclePhotoPreview() {
      if (!vehiclePhotoPreview) return;
      vehiclePhotoPreview.dataset.open = "false";
      vehiclePhotoPreview.setAttribute("aria-hidden", "true");
    }

    function openVehicleClaimDialog(plate) {
      if (!vehicleForm || !vehicleClaimDialog) return;
      if (vehicleClaimPlate) vehicleClaimPlate.textContent = plate;
      if (vehicleClaimTitle) vehicleClaimTitle.textContent = "该车辆已被绑定";
      if (vehicleClaimMessage) vehicleClaimMessage.textContent = "该车牌已完成绑定，暂不能重复添加。请核对车牌号和颜色；如需处理绑定问题，请联系客服。";
      if (vehicleClaimSecondary) vehicleClaimSecondary.textContent = "返回修改";
      if (vehicleClaimPrimary) {
        vehicleClaimPrimary.textContent = "联系客服";
        vehicleClaimPrimary.classList.remove("is-danger");
      }
      closePlateKeyboard();
      closePlateColorSheet();
      vehicleClaimDialog.dataset.mode = "duplicate";
      vehicleForm.dataset.vehicleClaimDialog = "open";
      vehicleClaimDialog.setAttribute("aria-hidden", "false");
    }

    function openVehicleUnbindDialog() {
      if (vehicleHasLockedMonthlyRental(vehicleFormState.editingPlateKey)) {
        showToast("该车辆已关联月租，暂不能解绑");
        return;
      }
      const card = Array.from(vehicleList?.querySelectorAll("[data-vehicle-card]") || []).find((item) => {
        return vehiclePlateKey(item.dataset.plate || "") === vehicleFormState.editingPlateKey;
      });
      if (!card || !vehicleForm || !vehicleClaimDialog) return;
      if (vehicleClaimPlate) vehicleClaimPlate.textContent = card.dataset.plate || "";
      if (vehicleClaimTitle) vehicleClaimTitle.textContent = "确认解绑车辆？";
      if (vehicleClaimMessage) vehicleClaimMessage.textContent = "解绑后将从当前账号的车辆列表移除，历史订单不受影响。";
      if (vehicleClaimSecondary) vehicleClaimSecondary.textContent = "取消";
      if (vehicleClaimPrimary) {
        vehicleClaimPrimary.textContent = "确认解绑";
        vehicleClaimPrimary.classList.add("is-danger");
      }
      closePlateKeyboard();
      closePlateColorSheet();
      vehicleClaimDialog.dataset.mode = "unbind";
      vehicleForm.dataset.vehicleClaimDialog = "open";
      vehicleClaimDialog.setAttribute("aria-hidden", "false");
    }

    function closeVehicleClaimDialog() {
      if (!vehicleForm || !vehicleClaimDialog) return;
      vehicleForm.dataset.vehicleClaimDialog = "closed";
      vehicleClaimDialog.dataset.mode = "";
      vehicleClaimDialog.setAttribute("aria-hidden", "true");
    }

    function resetVehicleForm() {
      vehicleFormState.plateColor = "蓝色车牌";
      vehicleFormState.plateColorCode = "02";
      vehicleFormState.grade = "小型车";
      vehicleFormState.gradeCode = "1";
      vehicleFormState.vehicleTypeCode = "1";
      vehicleFormState.plateProvince = "闽";
      vehicleFormState.plateLetter = "D";
      vehicleFormState.plateSuffix = "";
      vehicleFormState.activePlateSlot = "suffix";
      vehicleFormState.photos = [];
      vehicleFormState.editingPlateKey = "";
      if (vehicleForm) vehicleForm.dataset.editing = "false";
      setVehicleFormLocked(false);
      if (vehicleAppearanceInput) vehicleAppearanceInput.value = "";
      if (vehicleFormTitle) vehicleFormTitle.textContent = "新增车辆";
      if (vehicleSaveButton) vehicleSaveButton.textContent = "保存车辆";
      syncVehicleChoiceState();
      closePlateKeyboard();
      closePlateColorSheet();
      closeVehicleClaimDialog();
      closeVehiclePhotoPreview();
      syncPlateInput();
      renderVehiclePhotos();
    }

    function vehiclePlateKey(plate) {
      return String(plate || "").replace(/\s+/g, "").toUpperCase();
    }

    function normalizeRegisteredVehicle(vehicle = {}) {
      return {
        plate: String(vehicle.plate || "").trim(),
        color: String(vehicle.color || vehicle.plateColor || "").trim(),
        colorCode: String(vehicle.colorCode || vehicle.plateColorCode || "").trim(),
      };
    }

    function getOrderVehicles(order = {}) {
      const vehicles = Array.isArray(order.vehicles) && order.vehicles.length
        ? order.vehicles
        : order.plate
          ? [{ plate: order.plate, color: order.color || order.plateColor || "", colorCode: order.colorCode || order.plateColorCode || "" }]
          : [];
      return vehicles.map(normalizeRegisteredVehicle).filter((vehicle) => vehicle.plate);
    }

    function orderHasVehicle(order, plate) {
      const key = vehiclePlateKey(plate);
      return Boolean(key) && getOrderVehicles(order).some((vehicle) => vehiclePlateKey(vehicle.plate) === key);
    }

    function sameOrderVehicleSet(firstOrder, secondOrder) {
      const firstVehicles = getOrderVehicles(firstOrder);
      const secondVehicles = getOrderVehicles(secondOrder);
      return firstVehicles.length === secondVehicles.length &&
        firstVehicles.every((vehicle) => orderHasVehicle(secondOrder, vehicle.plate));
    }

    function rentVehiclesText(vehicles = [], { includeColor = false, compact = false } = {}) {
      const normalized = vehicles.map(normalizeRegisteredVehicle).filter((vehicle) => vehicle.plate);
      if (!normalized.length) return "--";
      if (compact && normalized.length > 1) return `${normalized[0].plate} 等 ${normalized.length} 辆`;
      return normalized.map((vehicle) => {
        return includeColor && vehicle.color ? `${vehicle.plate} · ${vehicle.color}` : vehicle.plate;
      }).join("\n");
    }

    function orderVehicleText(order, options = {}) {
      return rentVehiclesText(getOrderVehicles(order), options);
    }

    function refundVehicleText(record, options = {}) {
      const vehicles = Array.isArray(record?.vehicles) && record.vehicles.length
        ? record.vehicles
        : [{ plate: record?.plate || "" }];
      return rentVehiclesText(vehicles, options);
    }

    function selectedRentVehicles() {
      return rentVehicleState.vehicles.map(normalizeRegisteredVehicle).filter((vehicle) => vehicle.plate);
    }

    function isRentVehicleSelected(plate) {
      const key = vehiclePlateKey(plate);
      return selectedRentVehicles().some((vehicle) => vehiclePlateKey(vehicle.plate) === key);
    }

    function syncRentVehicleFormMode() {
      const isRentFlow = vehicleFormReturnScreen === "rentFlow";
      if (rentVehicleProfileSection) rentVehicleProfileSection.hidden = !isRentFlow || !rentVehicleProfileRequired;
      if (rentVehicleBindHeading) rentVehicleBindHeading.hidden = !isRentFlow;
      if (!isRentFlow) return;

      if (rentVehicleProfileRequired) {
        if (rentVehicleProfileNameInput) rentVehicleProfileNameInput.value = userProfileState.name || "";
        if (rentVehicleProfilePhoneInput) rentVehicleProfilePhoneInput.value = userProfileState.phone || "";
        if (rentVehicleProfileIdCardInput) rentVehicleProfileIdCardInput.value = userProfileState.idCard || "";
      }
      if (vehicleFormTitle) vehicleFormTitle.textContent = rentVehicleProfileRequired ? "补全办理资料" : "新增办理车辆";
      if (vehicleSaveButton) vehicleSaveButton.textContent = "保存并继续";
    }

    function saveRentVehicleProfile() {
      const profile = {
        name: rentVehicleProfileNameInput?.value.trim() || "",
        phone: rentVehicleProfilePhoneInput?.value.trim() || "",
        idCard: rentVehicleProfileIdCardInput?.value.trim().toUpperCase() || "",
      };
      if (!validateProfile(profile, {
        name: rentVehicleProfileNameInput,
        phone: rentVehicleProfilePhoneInput,
        idCard: rentVehicleProfileIdCardInput,
      })) return false;
      Object.assign(userProfileState, profile);
      accountState.profiles[accountState.current] = { ...userProfileState };
      Object.assign(rentOwnerState, profile);
      syncPersonalProfile();
      return true;
    }

    function openVehicleForm(card, returnScreen = "vehicleManage", options = {}) {
      if (!ensureAuthenticated()) return;
      vehicleFormReturnScreen = returnScreen;
      rentVehicleProfileRequired = Boolean(options.profileRequired);
      resetVehicleForm();
      if (card) {
        if (vehicleForm) vehicleForm.dataset.editing = "true";
        vehicleFormState.editingPlateKey = vehiclePlateKey(card.dataset.plate || "");
        vehicleFormState.plateColor = normalizePlateColor(card.dataset.plateColor);
        vehicleFormState.plateColorCode = card.dataset.plateColorCode || plateColorCodeFor(vehicleFormState.plateColor);
        vehicleFormState.grade = card.dataset.grade || "小型车";
        vehicleFormState.gradeCode = card.dataset.gradeCode || gradeCodeFor(vehicleFormState.grade);
        vehicleFormState.vehicleTypeCode = card.dataset.vehicleTypeCode || "1";
        const plateParts = splitVehiclePlate(card.dataset.plate || "");
        vehicleFormState.plateProvince = plateParts.province;
        vehicleFormState.plateLetter = plateParts.letter;
        vehicleFormState.plateSuffix = plateParts.suffix;
        if (vehicleAppearanceInput) vehicleAppearanceInput.value = card.dataset.appearance || "";
        if (vehicleFormTitle) vehicleFormTitle.textContent = "车辆信息";
        if (vehicleSaveButton) vehicleSaveButton.textContent = "保存修改";
        syncVehicleChoiceState();
      }
      syncRentVehicleFormMode();
      syncPlateInput();
      setVehicleFormLocked(Boolean(card && vehicleHasLockedMonthlyRental(card.dataset.plate || "")));
      showTab("vehicleForm");
    }

    function createVehicleCard({ plate, plateColor, plateColorCode, grade, gradeCode, vehicleTypeCode = "1", appearance }) {
      const card = document.createElement("button");
      card.className = "vehicle-manage-card";
      card.type = "button";
      card.dataset.vehicleCard = "true";
      card.dataset.account = accountState.current;
      card.dataset.plate = plate;
      card.dataset.plateColor = plateColor;
      card.dataset.plateColorCode = plateColorCode || plateColorCodeFor(plateColor);
      card.dataset.grade = grade;
      card.dataset.gradeCode = gradeCode || gradeCodeFor(grade);
      card.dataset.vehicleTypeCode = vehicleTypeCode;
      card.dataset.appearance = appearance;
      card.setAttribute("aria-label", `查看${plate}车辆信息`);

      const visual = document.createElement("div");
      visual.className = `vehicle-card-visual${plateColorCode === "26" ? " green" : ""}`;
      visual.innerHTML = '<svg class="icon"><use href="#i-car"></use></svg>';

      const copy = document.createElement("div");
      copy.className = "vehicle-card-copy";
      const plateLine = document.createElement("div");
      plateLine.className = "vehicle-plate-line";
      const plateText = document.createElement("strong");
      plateText.className = "vehicle-plate";
      plateText.textContent = plate;
      const plateTag = document.createElement("span");
      plateTag.className = `vehicle-plate-tag ${plateColorClass(plateColorCode || plateColorCodeFor(plateColor))}`;
      plateTag.textContent = plateColor;
      plateLine.append(plateText, plateTag);

      const meta = document.createElement("div");
      meta.className = "vehicle-meta-line";
      meta.textContent = `${grade} · ${appearance || "外观颜色未填写"}`;
      const bindTag = document.createElement("span");
      bindTag.className = "vehicle-bind-tag";
      bindTag.hidden = true;
      copy.append(plateLine, meta, bindTag);

      const arrow = document.createElement("span");
      arrow.className = "vehicle-card-arrow";
      arrow.textContent = "›";
      card.append(visual, copy, arrow);
      return card;
    }

    function appendRentVehicleOption({ plate, plateColor, plateColorCode }) {
      const options = document.querySelector(".rent-vehicle-options");
      if (!options) return;
      const option = document.createElement("button");
      option.className = "rent-vehicle-option";
      option.type = "button";
      option.setAttribute("role", "checkbox");
      option.setAttribute("aria-checked", "false");
      option.dataset.rentVehicleOption = "true";
      option.dataset.account = accountState.current;
      option.dataset.plate = plate;
      option.dataset.vehicleColor = plateColor;
      option.dataset.vehicleColorCode = plateColorCode || plateColorCodeFor(plateColor);
      option.innerHTML = '<span class="vehicle-option-icon"><svg class="icon sm"><use href="#i-car"></use></svg></span><span class="vehicle-option-copy"><strong></strong><small></small></span><span class="vehicle-option-check">✓</span>';
      option.querySelector("strong").textContent = plate;
      option.querySelector("small").textContent = plateColor;
      options.appendChild(option);
    }

    function formatVehiclePlate(prefix, suffix) {
      return `${prefix} ${suffix}`;
    }

    function unbindCurrentVehicle() {
      const plateKey = vehicleFormState.editingPlateKey;
      const card = Array.from(vehicleList?.querySelectorAll("[data-vehicle-card]") || []).find((item) => {
        return vehiclePlateKey(item.dataset.plate || "") === plateKey;
      });
      if (!card) {
        closeVehicleClaimDialog();
        return;
      }
      if (vehicleHasLockedMonthlyRental(plateKey)) {
        closeVehicleClaimDialog();
        showToast("该车辆已关联月租，暂不能解绑");
        return;
      }

      const rentOption = getRentVehicleOptions().find((option) => {
        return vehiclePlateKey(option.dataset.plate || "") === plateKey;
      });
      card.remove();
      rentOption?.remove();
      resetVehicleForm();
      updateVehicleCollection();
      syncHomeMonthlyCard();
      showTab("vehicleManage");
      showToast("车辆已解绑");
    }

    function saveVehicle() {
      if (vehicleFormState.editingPlateKey && vehicleHasLockedMonthlyRental(vehicleFormState.editingPlateKey)) {
        showToast("该车辆已关联月租，暂不能修改");
        return;
      }
      const suffix = cleanPlateSuffix(vehicleFormState.plateSuffix);
      const appearance = vehicleAppearanceInput?.value.trim() || "";
      const isValidPlate = Boolean(vehicleFormState.plateProvince && vehicleFormState.plateLetter) && suffix.length === plateSuffixLimit();
      if (!isValidPlate) {
        const requiredTailLength = plateSuffixLimit();
        showFieldError(vehiclePlateInput, `请完整填写车牌号：闽D后需填写${requiredTailLength}位（已填${suffix.length}位）`, { focus: false });
        return;
      }
      vehicleFormState.plateSuffix = suffix;
      const prefix = `${vehicleFormState.plateProvince}${vehicleFormState.plateLetter}`;
      const plate = vehiclePlateKey(`${prefix}${suffix}`);
      const editingCard = Array.from(vehicleList?.querySelectorAll("[data-vehicle-card]") || []).find((card) => {
        return vehiclePlateKey(card.dataset.plate || "") === vehicleFormState.editingPlateKey;
      });
      const duplicated = Array.from(vehicleList?.querySelectorAll("[data-vehicle-card]") || []).some((card) => {
        return card !== editingCard && vehiclePlateKey(card.dataset.plate || "") === plate;
      });
      if (duplicated) {
        openVehicleClaimDialog(formatVehiclePlate(prefix, suffix));
        return;
      }
      if (externallyBoundVehicleKeys.has(plate) && vehicleFormState.editingPlateKey !== plate) {
        openVehicleClaimDialog(formatVehiclePlate(prefix, suffix));
        return;
      }

      const vehicle = {
        plate: formatVehiclePlate(prefix, suffix),
        plateColor: vehicleFormState.plateColor,
        plateColorCode: vehicleFormState.plateColorCode,
        grade: vehicleFormState.grade,
        gradeCode: vehicleFormState.gradeCode,
        vehicleTypeCode: vehicleFormState.vehicleTypeCode,
        appearance,
      };
      if (rentVehicleProfileRequired && !saveRentVehicleProfile()) return;
      if (editingCard) {
        editingCard.replaceWith(createVehicleCard(vehicle));
        const rentOption = getRentVehicleOptions().find((option) => {
          return vehiclePlateKey(option.dataset.plate || "") === vehicleFormState.editingPlateKey;
        });
        if (rentOption) {
          rentOption.dataset.plate = vehicle.plate;
          rentOption.dataset.vehicleColor = vehicle.plateColor;
          rentOption.dataset.vehicleColorCode = vehicle.plateColorCode;
          rentOption.querySelector("strong").textContent = vehicle.plate;
          rentOption.querySelector("small").textContent = vehicle.plateColor;
        }
      } else {
        vehicleList?.prepend(createVehicleCard(vehicle));
        appendRentVehicleOption(vehicle);
      }
      resetVehicleForm();
      updateVehicleCollection();
      const nextScreen = vehicleFormReturnScreen;
      vehicleFormReturnScreen = "vehicleManage";
      rentVehicleProfileRequired = false;
      if (nextScreen === "rentFlow") {
        continueRentVehicleStep();
      } else {
        showTab("vehicleManage");
      }
      showToast(editingCard ? "车辆信息已保存" : "车辆已添加");
    }

    function selectRentVehicle(option) {
      const vehicle = normalizeRegisteredVehicle({
        plate: option.dataset.plate,
        color: option.dataset.vehicleColor,
        colorCode: option.dataset.vehicleColorCode,
      });
      if (!vehicle.plate) return;
      if (isRentVehicleSelected(vehicle.plate)) {
        rentVehicleState.vehicles = selectedRentVehicles().filter((item) => vehiclePlateKey(item.plate) !== vehiclePlateKey(vehicle.plate));
      } else if (selectedRentVehicles().length >= RENT_VEHICLE_LIMIT) {
        showToast(`一次最多登记 ${RENT_VEHICLE_LIMIT} 辆车辆`);
        return;
      } else {
        rentVehicleState.vehicles = [...selectedRentVehicles(), vehicle];
      }
      syncRentVehiclePicker();
      updateRentVehicleNextState();
    }

    function garageDistance(card) {
      const sub = card.querySelector(".garage-sub");
      const distance = Number(sub?.dataset.distance);
      return Number.isFinite(distance) ? distance : Number.MAX_SAFE_INTEGER;
    }

    function garagePrice(card) {
      const text = card.querySelector(".price")?.textContent || "";
      const match = text.match(/\d+/);
      return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
    }

    function applyGarageListControls() {
      if (!fullGarageList || !garageListPage) return;
      const cards = Array.from(fullGarageList.querySelectorAll(".garage-card"));

      cards.sort((a, b) => {
        if (garageListState.sort === "priceAsc") return garagePrice(a) - garagePrice(b);
        if (garageListState.sort === "priceDesc") return garagePrice(b) - garagePrice(a);
        return garageDistance(a) - garageDistance(b);
      });

      let visibleCount = 0;
      cards.forEach((card) => {
        const isFull = card.classList.contains("full");
        const visible =
          garageListState.filter === "all" ||
          (garageListState.filter === "available" && !isFull) ||
          (garageListState.filter === "full" && isFull);
        card.style.display = visible ? "" : "none";
        if (visible) visibleCount += 1;
        fullGarageList.appendChild(card);
      });

      garageListPage.dataset.listEmpty = visibleCount === 0 ? "true" : "false";
    }

    function resetGarageListControls() {
      garageListState.filter = "all";
      garageListState.sort = "distance";
      garageFilterButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.garageFilter === "all");
      });
      garageSortButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.garageSort === "distance");
      });
    }

    function getOrderById(orderId = orderState.activeId) {
      return orderState.records.find((order) => order.id === orderId) || orderState.records[0];
    }

    function formatOrderAmount(amount) {
      return `¥${Number(amount || 0).toFixed(2)}`;
    }

    function dateFromOrderValue(value) {
      const [year, month, day] = String(value || "").slice(0, 10).split("-").map(Number);
      if (!year || !month || !day) return null;
      return new Date(year, month - 1, day);
    }

    function getRefundQuote(order) {
      if (order.rentalStatus === "待生效") {
        return { remainingTerm: "尚未生效", estimatedAmount: order.amount };
      }
      const start = dateFromOrderValue(order.start);
      const end = dateFromOrderValue(order.end);
      if (!start || !end || end < start) {
        return { remainingTerm: "--", estimatedAmount: 0 };
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const totalDays = Math.floor((end - start) / 86400000) + 1;
      const remainingStart = today > start ? today : start;
      const remainingDays = remainingStart > end
        ? 0
        : Math.floor((end - remainingStart) / 86400000) + 1;
      return {
        remainingTerm: `${remainingDays} 天`,
        estimatedAmount: Math.round((order.amount * remainingDays) / totalDays),
      };
    }

    function nextDate(dateValue) {
      const [year, month, day] = String(dateValue).split("-").map(Number);
      const date = new Date(year, month - 1, day + 1);
      return formatRentDate(date);
    }

    function addOrderMonths(startDate, months) {
      const [year, month, day] = String(startDate).split("-").map(Number);
      if (!year || !month || !day) return "--";
      const monthOffset = month - 1 + Math.max(1, Number.parseInt(months, 10) || 1);
      const targetYear = year + Math.floor(monthOffset / 12);
      const targetMonth = monthOffset % 12;
      const lastDay = new Date(targetYear, targetMonth + 1, 0).getDate();
      const end = new Date(targetYear, targetMonth, Math.min(day, lastDay));
      if (day <= lastDay) end.setDate(end.getDate() - 1);
      return formatRentDate(end);
    }

    function orderStatusMeta(order) {
      if (order.refundStatus === "审批中") {
        const description = order.rentalStatus === "待生效"
          ? "退款申请正在审核中，待生效月租暂不会开通。"
          : "退款申请正在审核中，月租通行已暂停，名额暂不释放。";
        return { label: "退款审批中", className: "refund", panelClass: "is-refund", icon: "i-refund", description };
      }
      if (order.refundStatus === "已通过") {
        return { label: "月租已结束", className: "cancelled", panelClass: "is-cancelled", icon: "i-info", description: "退款申请审核通过，工作人员将联系您确认退款金额及方式。" };
      }
      if (order.rentalStatus === "待生效") {
        return { label: "待生效", className: "syncing", panelClass: "is-pending", icon: "i-info", description: "续费已支付，将在当前租期结束后自动生效。" };
      }
      if (order.passStatus === "未开通") {
        return { label: "开通中", className: "syncing", panelClass: "", icon: "i-info", description: "支付已完成，正在同步停车平台授权。" };
      }
      if (order.rentalStatus === "过期" || order.rentalStatus === "终止") {
        return { label: order.rentalStatus === "终止" ? "已终止" : "已过期", className: "cancelled", panelClass: "is-cancelled", icon: "i-info", description: "该订单月租服务已结束，仍可查看历史缴费和开票信息。" };
      }
      return { label: "有效中", className: "active", panelClass: "is-active", icon: "i-card", description: "月租在有效期内。" };
    }

    function orderSubtabOptions() {
      if (orderState.filter === "active") {
        return [
          { value: "all", label: "全部" },
          { value: "effective", label: "有效中" },
          { value: "upcoming", label: "待生效" },
        ];
      }
      if (orderState.filter === "completed") {
        return [
          { value: "all", label: "全部" },
          { value: "expired", label: "已过期" },
          { value: "terminated", label: "已终止" },
        ];
      }
      return [];
    }

    function syncOrderSubTabs() {
      if (!orderSubTabs) return;
      const options = orderSubtabOptions();
      orderSubTabs.hidden = options.length === 0;
      if (!options.length) {
        orderSubTabs.innerHTML = "";
        return;
      }
      orderSubTabs.innerHTML = options.map((option) => {
        const active = option.value === orderState.subFilter;
        return `<button class="order-subtab${active ? " is-active" : ""}" type="button" data-order-sub-filter="${option.value}">${option.label}</button>`;
      }).join("");
    }

    function orderMatchesFilter(order) {
      if (order.hiddenFromUser === true) return false;
      const isCompleted = ["过期", "终止"].includes(order.rentalStatus) || order.refundStatus === "已通过";
      if (orderState.filter === "active") {
        const isActive = ["有效", "待生效"].includes(order.rentalStatus) && !["审批中", "已通过"].includes(order.refundStatus);
        if (!isActive) return false;
        if (orderState.subFilter === "effective") return order.rentalStatus === "有效";
        if (orderState.subFilter === "upcoming") return order.rentalStatus === "待生效";
        return true;
      }
      if (orderState.filter === "afterSales") return order.refundStatus === "审批中";
      if (orderState.filter === "completed") {
        if (!isCompleted) return false;
        if (orderState.subFilter === "expired") return order.rentalStatus === "过期";
        if (orderState.subFilter === "terminated") return order.rentalStatus === "终止" || order.refundStatus === "已通过";
        return true;
      }
      return true;
    }

    function isVatInvoiceApplicationExpired(order) {
      if (invoiceVoucherFor(order) !== "增值税发票" || !order.paymentAt) return false;
      const paidAt = dateFromOrderValue(order.paymentAt);
      if (!paidAt) return false;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return Math.floor((today - paidAt) / 86400000) > 30;
    }

    function canApplyInvoice(order) {
      return Boolean(order.paymentAt) &&
        order.invoiceStatus === "未申请" &&
        !["审批中", "已通过"].includes(order.refundStatus) &&
        !isVatInvoiceApplicationExpired(order);
    }

    function invoiceUnavailableMessage(order) {
      if (order.refundStatus === "审批中") return "退款审批中，暂不可申请开票";
      if (order.refundStatus === "已通过") {
        return order.invoiceStatus === "已完成"
          ? "退款已完成，已开具票据将由财务线下处理"
          : "售后处理中，暂不可申请开票";
      }
      if (isVatInvoiceApplicationExpired(order)) return "该订单已超过支付后30天，暂不支持线上申请开票";
      return "--";
    }

    function renderOrderList() {
      if (!orderList || !orderListScreen) return;
      const records = orderState.records.filter(orderMatchesFilter);
      orderList.innerHTML = "";

      records.forEach((order) => {
        const status = orderStatusMeta(order);
        const actions = orderMoreItems(order).filter((item) => !item.unavailable);
        const refundApprovedNote = order.refundStatus === "已通过"
          ? '<p class="order-card-refund-note">退款申请审核通过，工作人员将联系您确认退款金额及方式。</p>'
          : "";
        const orderVehicles = getOrderVehicles(order);
        const orderVehicleMarkup = orderVehicles.length
          ? `<span class="order-primary-plate">${escapeHtml(orderVehicles[0].plate)}</span>${orderVehicles.slice(1).map((vehicle) => `<span class="order-secondary-plate">${escapeHtml(vehicle.plate)}</span>`).join("")}`
          : "--";
        const card = document.createElement("section");
        card.className = "order-card";
        card.innerHTML = `
          <button class="order-card-open" type="button" data-order-open-id="${order.id}" aria-label="查看${order.orderNo}订单详情">
            <div class="order-card-head">
              <span class="order-community">${order.community}</span>
              <span class="order-status ${status.className}">${status.label}</span>
            </div>
            <div class="order-card-plate">${orderVehicleMarkup}</div>
            <div class="order-card-meta">
              <span>${order.start} 至 ${order.end}</span>
              <strong>实付 ${formatOrderAmount(order.amount)}</strong>
            </div>
            ${refundApprovedNote}
          </button>
          <div class="order-card-actions"${actions.length ? "" : " hidden"}>
            ${actions.map((item) => `<button class="order-inline-action${item.danger ? " is-danger" : ""}" type="button" data-order-inline-id="${order.id}" data-order-inline-action="${item.action}">${item.label}</button>`).join("")}
          </div>`;
        orderList.appendChild(card);
      });

      orderListScreen.dataset.orderEmpty = records.length === 0 ? "true" : "false";
    }

    function canRenewOrder(order) {
      return order?.rentalStatus === "有效" && !["审批中", "已通过"].includes(order.refundStatus);
    }

    function orderMoreItems(order) {
      const hasOpenRefund = ["审批中", "已通过"].includes(order.refundStatus);
      const canRenew = canRenewOrder(order);
      const canSwapVehicle = canSwapOrderVehicle(order);
      const canRefund = ["有效", "待生效"].includes(order.rentalStatus) && !hasOpenRefund;
      const invoiceAvailable = canApplyInvoice(order);
      const items = [];

      if (canRenew) items.push({ action: "renew", label: "续费" });
      if (canSwapVehicle) items.push({ action: "swapVehicle", label: "变更车辆" });
      if (canRefund) items.push({ action: "refund", label: "退款" });
      if (order.refundStatus === "审批中") items.push({ label: "退款审批中", unavailable: true });

      if (order.invoiceStatus === "已完成") {
        items.push({ action: "viewInvoice", label: invoiceViewLabel(order) });
      } else if (order.invoiceStatus === "申请中" && order.refundStatus !== "审批中") {
        items.push({ action: "invoiceProgress", label: "开票进度" });
      } else if (invoiceAvailable) {
        items.push({ action: "invoice", label: "申请开票" });
      }

      return items;
    }

    function canDeleteOrder(order) {
      return Boolean(order) &&
        !order.hiddenFromUser &&
        ["过期", "终止"].includes(order.rentalStatus) &&
        order.refundStatus !== "审批中";
    }

    function deleteOrderFromUserView() {
      if (!ensureAuthenticated()) return;
      const order = getOrderById();
      if (!canDeleteOrder(order)) {
        showToast("当前订单暂不能删除");
        return;
      }
      const confirmed = window.confirm("删除后将从当前账号的订单列表中移除，支付、退款和开票记录仍会保留。确认删除吗？");
      if (!confirmed) return;
      order.hiddenFromUser = true;
      orderState.activeId = orderState.records.find((item) => !item.hiddenFromUser)?.id || "";
      renderOrderList();
      showTab("orderList");
      showToast("订单已删除");
    }

    function renderOrderDetail(orderId = orderState.activeId) {
      const order = getOrderById(orderId);
      if (!order || !orderDetailContent || !orderDetailFooter) return;
      orderState.activeId = order.id;
      const vehicleChanges = Array.isArray(order.vehicleChangeRecords) ? order.vehicleChangeRecords : [];
      const latestVehicleChange = vehicleChanges.at(-1);
      const vehicleLabel = latestVehicleChange ? "当前通行车辆" : "办理车辆";
      const vehicleChangeRow = latestVehicleChange
        ? `<div class="order-detail-row"><span>最近操作</span><strong class="order-detail-vehicles">${latestVehicleChange.type === "unbind" ? `${escapeHtml(latestVehicleChange.from)} 已移除` : latestVehicleChange.type === "add" ? `${escapeHtml(latestVehicleChange.to?.plate || "--")} 已添加` : `${escapeHtml(latestVehicleChange.from)} → ${escapeHtml(latestVehicleChange.to?.plate || "--")}`}</strong></div>`
        : "";

      const invoiceRecordRow = order.invoiceStatus === "已完成"
        ? `<div class="order-action-row"><span>开票信息</span><button type="button" data-order-action="viewInvoice">${invoiceViewLabel(order)}</button></div>`
        : ["申请中", "已暂停"].includes(order.invoiceStatus)
          ? `<div class="order-action-row"><span>开票申请</span><strong>${invoiceProcessingLabel(order)}</strong></div>`
          : "";
      const monthlyStatus = order.refundStatus === "已通过" || order.rentalStatus === "终止"
        ? "月租已结束"
        : order.rentalStatus === "过期"
          ? "已过期"
          : order.rentalStatus;
      const accessExceptionRows = order.passStatus === "未开通"
        ? '<div class="order-detail-row"><span>通行授权</span><strong>处理中</strong></div><div class="order-detail-row"><span>说明</span><strong class="order-detail-location">停车平台正在同步，请稍候</strong></div>'
        : order.passStatus === "已暂停"
          ? '<div class="order-detail-row"><span>通行状态</span><strong>已暂停</strong></div><div class="order-detail-row"><span>说明</span><strong class="order-detail-location">退款审批中，当前不可通行</strong></div>'
          : "";
      const refundStatusRow = order.refundStatus === "审批中"
        ? '<div class="order-detail-row"><span>退款申请</span><strong>审批中</strong></div>'
        : order.refundStatus === "已通过"
          ? '<div class="order-detail-row"><span>退款申请</span><strong>审核已通过</strong></div><div class="order-detail-row"><span>处理说明</span><strong class="order-detail-location">工作人员将联系您确认退款金额及方式</strong></div>'
          : order.refundStatus === "未通过"
            ? '<div class="order-detail-row"><span>退款申请</span><strong>审核未通过</strong></div>'
            : "";
      const serviceSection = `<section class="order-detail-section">
          <h3>服务状态</h3>
          <div class="order-detail-row"><span>月租状态</span><strong>${monthlyStatus}</strong></div>
          ${accessExceptionRows}
          ${refundStatusRow}
          ${invoiceRecordRow}
        </section>`;

      orderDetailContent.innerHTML = `
        <section class="order-detail-section">
          <h3>月租信息</h3>
          <div class="order-detail-row"><span>小区</span><strong class="order-detail-location">${order.community}</strong></div>
          <div class="order-detail-row"><span>${vehicleLabel}</span><strong class="order-detail-vehicles">${orderVehicleText(order, { includeColor: true })}</strong></div>
          ${vehicleChangeRow}
          <div class="order-detail-row"><span>租期</span><strong>${order.start} 至 ${order.end}</strong></div>
          <div class="order-detail-row"><span>租赁月数</span><strong>${order.months} 个月</strong></div>
        </section>
        <section class="order-detail-section">
          <h3>订单信息</h3>
          <div class="order-detail-row"><span>订单金额</span><strong class="amount">${formatOrderAmount(order.amount)}</strong></div>
          <div class="order-detail-row"><span>支付方式</span><strong>微信支付</strong></div>
          <div class="order-detail-row"><span>创建时间</span><strong>${order.createdAt || "--"}</strong></div>
          <div class="order-detail-row"><span>付款时间</span><strong>${order.paymentAt}</strong></div>
        </section>
        ${serviceSection}
        `;

      orderDetailFooter.innerHTML = canDeleteOrder(order)
        ? `<div class="order-detail-actions"><button class="order-detail-delete" type="button" data-order-action="deleteOrder">删除订单</button></div>`
        : "";
    }

    function openOrderList(returnScreen = document.body.dataset.currentTab || "home") {
      if (!ensureAuthenticated()) return;
      orderState.listReturnScreen = returnScreen === "orderDetail" ? "home" : returnScreen;
      orderState.filter = "all";
      orderState.subFilter = "all";
      orderFilterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.orderFilter === "all"));
      syncOrderSubTabs();
      renderOrderList();
      showTab("orderList");
    }

    function openOrderDetail(orderId, returnScreen = "orderList") {
      if (!ensureAuthenticated()) return;
      if (!getOrderById(orderId)) return;
      orderState.detailReturnScreen = returnScreen;
      renderOrderDetail(orderId);
      showTab("orderDetail");
    }

    function renderRenewal(order = getOrderById()) {
      const start = nextDate(order.end);
      const end = addOrderMonths(start, orderState.renewMonths);
      const monthlyRate = order.amount / Math.max(order.months, 1);
      if (renewCommunity) renewCommunity.textContent = order.community;
      if (renewPlate) renewPlate.textContent = orderVehicleText(order, { compact: true });
      if (renewStart) renewStart.textContent = start;
      if (renewEnd) renewEnd.textContent = end;
      if (renewAmount) renewAmount.textContent = String(Math.round(monthlyRate * orderState.renewMonths));
      if (renewMonthsInput && renewMonthsInput.value !== String(orderState.renewMonths)) {
        renewMonthsInput.value = String(orderState.renewMonths);
      }
      renewMonthButtons.forEach((button) => button.classList.toggle("is-active", Number(button.dataset.renewMonth) === orderState.renewMonths));
    }

    function openOrderRenewal() {
      if (!ensureAuthenticated()) return;
      if (!canRenewOrder(getOrderById())) {
        showToast("仅有效中的月租可以续费");
        return;
      }
      orderState.renewMonths = 1;
      renderRenewal();
      showTab("orderRenew");
    }

    function getSavedRefundAccount() {
      return accountState.refundAccounts[accountState.current] || { bank: "", account: "", phone: "" };
    }

    function getOrderPayerName(order) {
      return String(order?.payerNameSnapshot || userProfileState.name || "").trim();
    }

    function maskRefundAccount(account) {
      const value = String(account || "").replace(/\s/g, "");
      return value.length > 4 ? `尾号 ${value.slice(-4)}` : value;
    }

    function renderRefundAccountEntry(order = getOrderById()) {
      if (!refundAccountSummary) return;
      const savedAccount = getSavedRefundAccount();
      const payerName = getOrderPayerName(order);
      if (!savedAccount.account) {
        refundAccountSummary.textContent = "请填写";
        return;
      }
      refundAccountSummary.textContent = `${payerName || "收款人"} · ${savedAccount.bank || "开户行"} · ${maskRefundAccount(savedAccount.account)}`;
    }

    function openRefundAccount() {
      if (!ensureAuthenticated()) return;
      const order = getOrderById();
      const savedAccount = getSavedRefundAccount();
      if (refundAccountPayer) refundAccountPayer.textContent = getOrderPayerName(order) || "--";
      if (refundBankInput) {
        refundBankInput.value = savedAccount.bank || "";
        clearFieldError(refundBankInput);
      }
      if (refundBankAccountInput) {
        refundBankAccountInput.value = savedAccount.account || "";
        clearFieldError(refundBankAccountInput);
      }
      if (refundAccountPhoneInput) {
        refundAccountPhoneInput.value = savedAccount.phone || userProfileState.phone || "";
        clearFieldError(refundAccountPhoneInput);
      }
      showTab("refundAccount");
    }

    function saveRefundAccount() {
      if (!ensureAuthenticated()) return;
      const bank = refundBankInput?.value.trim() || "";
      const account = refundBankAccountInput?.value.replace(/\s/g, "") || "";
      const phone = refundAccountPhoneInput?.value.trim() || "";
      [refundBankInput, refundBankAccountInput, refundAccountPhoneInput].forEach(clearFieldError);
      if (!bank) {
        showFieldError(refundBankInput, "请填写开户行及支行");
        return;
      }
      if (!/^\d{12,30}$/.test(account)) {
        showFieldError(refundBankAccountInput, "请输入正确的银行卡号");
        return;
      }
      if (!isValidMobilePhone(phone)) {
        showFieldError(refundAccountPhoneInput, "请输入正确的11位联系电话");
        return;
      }
      accountState.refundAccounts[accountState.current] = { bank, account, phone };
      renderRefundAccountEntry();
      showTab("orderRefund");
      showToast("退款账户已保存");
    }

    function renderRefund(order = getOrderById()) {
      const quote = getRefundQuote(order);
      document.querySelector("[data-refund-community]").textContent = order.community;
      document.querySelector("[data-refund-plate]").textContent = orderVehicleText(order, { compact: true });
      document.querySelector("[data-refund-paid-amount]").textContent = String(order.amount);
      document.querySelector("[data-refund-remaining-term]").textContent = quote.remainingTerm;
      document.querySelector("[data-refund-estimate]").textContent = String(quote.estimatedAmount);
      if (refundNote) refundNote.value = "";
      renderRefundAccountEntry(order);
      refundReasonButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.refundReason === orderState.refundReason));
    }

    function openOrderRefund() {
      if (!ensureAuthenticated()) return;
      orderState.refundReason = "不再使用月租";
      renderRefund();
      showTab("orderRefund");
    }

    function invoiceVoucherFor(order) {
      return order.projectType === "公司自营项目" ? "增值税发票" : "非税票据";
    }

    function invoiceViewLabel() {
      return "查看发票";
    }

    function invoiceProcessingLabel(order) {
      if (order.invoiceStatus === "已暂停") return "开票申请已暂停";
      return invoiceVoucherFor(order) === "增值税发票" ? "开票处理中" : "票据处理中";
    }

    function invoiceRecordType(order) {
      if (order.invoiceType) return order.invoiceType;
      return invoiceVoucherFor(order) === "增值税发票" ? "增值税发票" : "非税电子票据";
    }

    function renderInvoice(order = getOrderById()) {
      const voucher = invoiceVoucherFor(order);
      const isVat = voucher === "增值税发票";
      const pageTitle = isVat ? "申请开票" : "申请非税票据";
      screenTitles.orderInvoice = pageTitle;
      if (invoiceScreenLabel) invoiceScreenLabel.textContent = pageTitle;
      if (invoicePageTitle) invoicePageTitle.textContent = pageTitle;
      if (invoicePage) invoicePage.setAttribute("aria-label", `${pageTitle}界面`);
      if (invoiceSubmitButton) invoiceSubmitButton.textContent = isVat ? "提交开票申请" : "提交票据申请";
      if (invoiceVoucherType) invoiceVoucherType.textContent = voucher;
      if (invoiceSummaryTitle) invoiceSummaryTitle.textContent = isVat ? "开票内容" : "缴费信息";
      if (invoiceContentLabel) invoiceContentLabel.textContent = isVat ? "开票内容" : "收费项目";
      if (invoiceAmountLabel) invoiceAmountLabel.textContent = isVat ? "开票金额" : "票据金额";
      if (invoiceSystemAmount) invoiceSystemAmount.textContent = formatOrderAmount(order.amount);
      if (invoiceVatSection) invoiceVatSection.hidden = !isVat;
      if (invoiceNontaxSection) invoiceNontaxSection.hidden = isVat;
      if (invoicePersonalName) invoicePersonalName.value = userProfileState.name;
      if (invoicePhone) invoicePhone.value = userProfileState.phone;
      const payerName = order.payerNameSnapshot || order.ownerNameSnapshot || userProfileState.name;
      const payerPhone = order.payerPhoneSnapshot || order.ownerPhoneSnapshot || userProfileState.phone;
      if (invoiceNontaxName) invoiceNontaxName.textContent = payerName;
      if (invoiceNontaxPhone) invoiceNontaxPhone.textContent = maskProfilePhone(payerPhone);
      setInvoiceType(isVat ? "personal" : "nontax");
    }

    function setInvoiceType(type) {
      orderState.invoiceType = type;
      invoiceTypeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.invoiceType === type));
      if (invoicePersonalFields) invoicePersonalFields.hidden = type !== "personal";
      const isCompanyInvoice = type === "company";
      const isSpecialInvoice = false;
      if (invoiceCompanyFields) invoiceCompanyFields.hidden = !isCompanyInvoice;
      if (invoiceCompanyTitle) invoiceCompanyTitle.textContent = "企业专票信息";
      if (invoiceCompanyTip) invoiceCompanyTip.textContent = "请填写企业名称和统一社会信用代码，其他资料按需填写。";
      invoiceSpecialRequiredMarks.forEach((mark) => {
        mark.hidden = !isSpecialInvoice;
      });
      invoiceCompanyInputs.forEach((input) => {
        const isRequired = input.dataset.invoiceCompanyRequired === "base" || isSpecialInvoice;
        input.required = isCompanyInvoice && isRequired;
        input.placeholder = isRequired ? `请输入${input.dataset.invoiceCompanyLabel || ""}` : "";
      });
    }

    function invoiceMatchesFilter(order) {
      if (order.invoiceStatus === "未申请") return false;
      if (orderState.invoiceFilter === "processing" && !["申请中", "已暂停"].includes(order.invoiceStatus)) return false;
      if (orderState.invoiceFilter === "done" && order.invoiceStatus !== "已完成") return false;
      if (orderState.invoiceTypeFilter === "nontax") return invoiceVoucherFor(order) === "非税票据";
      if (orderState.invoiceTypeFilter === "vat") return invoiceVoucherFor(order) === "增值税发票";
      return true;
    }

    function getRefundRecord(refundId = refundState.activeId) {
      return refundState.records.find((record) => record.id === refundId) || refundState.records[0];
    }

    function refundRecordStatusMeta(record) {
      if (record.status === "已通过") {
        return {
          label: "审核已通过",
          className: "approved",
          panelClass: "is-active",
          icon: "i-refund",
          description: "退款申请审核通过，工作人员将联系您确认退款金额及方式。",
        };
      }
      if (record.status === "未通过") {
        return {
          label: "退款未通过",
          className: "rejected",
          panelClass: "is-failed",
          icon: "i-info",
          description: "本次退款申请未通过，月租通行已恢复，符合条件时可重新申请。",
        };
      }
      if (record.status === "已撤销") {
        return {
          label: "退款申请已撤销",
          className: "cancelled",
          panelClass: "is-cancelled",
          icon: "i-info",
          description: "退款申请已撤销，月租通行已恢复。",
        };
      }
      return {
        label: "退款审批中",
        className: "pending",
        panelClass: "is-refund",
        icon: "i-refund",
        description: "退款申请正在审核中，月租通行已暂停，名额暂不释放。",
      };
    }

    function refundRecordMatchesFilter(record) {
      if (refundState.filter === "pending") return record.status === "审批中";
      if (refundState.filter === "approved") return record.status === "已通过";
      if (refundState.filter === "rejected") return record.status === "未通过";
      return true;
    }

    function cancelRefundApplication() {
      if (!ensureAuthenticated()) return;
      const record = getRefundRecord();
      if (!record || record.status !== "审批中") return;
      const order = orderState.records.find((item) => item.orderNo === record.orderNo);
      record.status = "已撤销";
      if (order) {
        order.refundStatus = "未申请";
        order.passStatus = order.rentalStatus === "有效" ? "已开通" : "待生效";
        renderOrderDetail(order.id);
        renderOrderList();
        renderInvoiceList();
        syncVehicleMonthlyState();
        syncHomeMonthlyCard();
      }
      renderRefundDetail(record.id);
      renderRefundRecordList();
      showToast("退款申请已撤销");
    }

    function refundRecordAmountLabel(record) {
      if (record.status === "已通过" && Number.isFinite(record.approvedAmount)) {
        return `退款金额 ${formatOrderAmount(record.approvedAmount)}`;
      }
      return `预计退款 ${formatOrderAmount(record.estimatedAmount)}`;
    }

    function renderRefundRecordList() {
      if (!refundRecordList || !refundListScreen) return;
      const records = refundState.records.filter(refundRecordMatchesFilter);
      refundRecordList.innerHTML = "";
      records.forEach((record) => {
        const status = refundRecordStatusMeta(record);
        const card = document.createElement("button");
        card.type = "button";
        card.className = "refund-record-card";
        card.dataset.refundRecordId = record.id;
        card.setAttribute("aria-label", `查看${record.requestNo}退款详情`);
        card.innerHTML = `
          <div class="refund-record-top">
            <span class="refund-record-plate">${refundVehicleText(record, { compact: true })}</span>
            <span class="refund-record-status ${status.className}">${status.label}</span>
          </div>
          <div class="refund-record-place">${record.community}</div>
          <div class="refund-record-info"><span>${refundRecordAmountLabel(record)}</span><strong>${record.reason}</strong></div>
          <div class="refund-record-foot"><span>${record.submittedAt}</span><span>查看详情</span></div>`;
        refundRecordList.appendChild(card);
      });
      refundListScreen.dataset.refundEmpty = records.length === 0 ? "true" : "false";
    }

    function openRefundList(returnScreen = document.body.dataset.currentTab || "personal") {
      if (!ensureAuthenticated()) return;
      refundState.listReturnScreen = returnScreen;
      refundState.filter = "all";
      refundFilterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.refundFilter === "all"));
      renderRefundRecordList();
      showTab("refundList");
    }

    function renderRefundDetail(refundId = refundState.activeId) {
      const record = getRefundRecord(refundId);
      if (!record || !refundDetailContent) return;
      refundState.activeId = record.id;
      const resultRows = record.status === "已通过"
        ? '<div class="order-detail-row"><span>审核状态</span><strong>审核已通过</strong></div><div class="order-detail-row"><span>处理说明</span><strong class="order-detail-location">工作人员将联系您确认退款金额及方式</strong></div>'
        : record.status === "未通过"
          ? '<div class="order-detail-row"><span>审核状态</span><strong>审核未通过</strong></div>'
          : '<div class="order-detail-row"><span>审核状态</span><strong>审批中</strong></div>';
      refundDetailContent.innerHTML = `
        <section class="order-detail-section">
          <h3>退款申请</h3>
          <div class="order-detail-row"><span>退款申请单号</span><strong>${record.requestNo}</strong></div>
          <div class="order-detail-row"><span>提交时间</span><strong>${record.submittedAt}</strong></div>
          ${resultRows}
          ${["已通过", "未通过"].includes(record.status) ? `<div class="order-detail-row"><span>审批时间</span><strong>${record.approvedAt || "--"}</strong></div>` : ""}
        </section>
        <section class="order-detail-section">
          <h3>原月租信息</h3>
          <div class="order-detail-row"><span>小区</span><strong>${record.community}</strong></div>
          <div class="order-detail-row"><span>退款车辆</span><strong class="order-detail-vehicles">${refundVehicleText(record, { includeColor: true })}</strong></div>
          <div class="order-detail-row"><span>原租期</span><strong>${record.start} 至 ${record.end}</strong></div>
        </section>
        <section class="order-detail-section">
          <h3>退款金额</h3>
          <div class="order-detail-row"><span>原支付金额</span><strong>${formatOrderAmount(record.originalPaidAmount)}</strong></div>
          <div class="order-detail-row"><span>剩余租期</span><strong>${record.remainingTerm}</strong></div>
          <div class="order-detail-row"><span>预计退款金额</span><strong class="amount">${formatOrderAmount(record.estimatedAmount)}</strong></div>
          ${record.status === "已通过" ? `<div class="order-detail-row"><span>审批通过金额</span><strong class="amount">${formatOrderAmount(record.approvedAmount)}</strong></div>` : ""}
        </section>
        <section class="order-detail-section">
          <h3>退款原因</h3>
          <div class="order-detail-row refund-reason-row"><span>退款原因</span><strong class="refund-reason-value">${escapeHtml(record.reason || "--")}</strong></div>
          <div class="order-detail-row refund-note-row"><span>补充说明</span><strong class="refund-note-value">${escapeHtml(record.note || "--")}</strong></div>
        </section>`;
      if (refundDetailFooter) {
        refundDetailFooter.hidden = record.status !== "审批中";
        refundDetailFooter.innerHTML = record.status === "审批中"
          ? '<button class="order-workflow-submit order-secondary-action" type="button" data-refund-cancel>撤销退款申请</button>'
          : "";
      }
    }

    function openRefundDetail(refundId, returnScreen = "refundList") {
      if (!ensureAuthenticated()) return;
      if (!getRefundRecord(refundId)) return;
      refundState.detailReturnScreen = returnScreen;
      renderRefundDetail(refundId);
      showTab("refundDetail");
    }

    function renderInvoiceList() {
      if (!invoiceRecordList || !invoiceListScreen) return;
      const records = orderState.records
        .filter(invoiceMatchesFilter)
        .sort((left, right) => String(right.invoiceAppliedAt || "").localeCompare(String(left.invoiceAppliedAt || "")));
      invoiceRecordList.innerHTML = "";
      records.forEach((order) => {
        const isDone = order.invoiceStatus === "已完成";
        const isPaused = order.invoiceStatus === "已暂停";
        const record = document.createElement("button");
        record.type = "button";
        record.className = "invoice-record-card";
        record.dataset.invoiceOrderId = order.id;
        record.setAttribute("aria-label", `查看${order.orderNo}开票记录`);
        record.innerHTML = `
          <div class="invoice-record-top">
            <span class="invoice-record-name">${invoiceRecordType(order)}</span>
            <span class="invoice-record-status${isDone ? " done" : ""}">${isDone ? "已完成" : invoiceProcessingLabel(order)}</span>
          </div>
          <div class="invoice-record-info"><span>${order.community}</span><strong>${formatOrderAmount(order.amount)}</strong></div>
          <div class="invoice-record-foot"><span>${isDone ? (order.invoiceCompletedAt || "--") : (order.invoiceAppliedAt || "已提交申请")}</span><span>${isDone ? invoiceViewLabel(order) : (isPaused ? "退款处理中" : "等待处理")}</span></div>`;
        invoiceRecordList.appendChild(record);
      });
      invoiceListScreen.dataset.invoiceEmpty = records.length === 0 ? "true" : "false";
    }

    function openInvoiceList(returnScreen = document.body.dataset.currentTab || "personal") {
      if (!ensureAuthenticated()) return;
      orderState.invoiceListReturnScreen = returnScreen;
      orderState.invoiceFilter = "all";
      orderState.invoiceTypeFilter = "all";
      invoiceFilterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.invoiceFilter === "all"));
      invoiceTypeFilterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.invoiceTypeFilter === "all"));
      renderInvoiceList();
      showTab("invoiceList");
    }

    function renderInvoiceResult(order = getOrderById()) {
      if (!order || !invoiceResultDetail || !invoiceResultFile) return;
      const isDone = order.invoiceStatus === "已完成";
      const isPaused = order.invoiceStatus === "已暂停";
      const voucher = invoiceVoucherFor(order);
      const isNontax = voucher === "非税票据";
      const documentType = invoiceRecordType(order);
      const pageTitle = isDone ? "发票详情" : "开票申请详情";
      const payerName = escapeHtml(order.payerNameSnapshot || order.invoiceTitle || order.ownerNameSnapshot || "--");
      const invoiceTitle = escapeHtml(order.invoiceTitle || "");
      const partyRow = isNontax
        ? `<div class="order-detail-row"><span>交款人</span><strong>${payerName}</strong></div>`
        : order.invoiceTitle
          ? `<div class="order-detail-row"><span>开票抬头</span><strong>${invoiceTitle}</strong></div>`
          : "";
      const applicationState = !isDone
        ? `<div class="invoice-application-status"><div><strong>${isPaused ? "开票申请已暂停" : "申请已提交"}</strong><span>${isPaused ? "退款处理中，当前不开具票据" : "财务正在处理，请耐心等待"}</span></div><b>${invoiceProcessingLabel(order)}</b></div>`
        : "";
      screenTitles.invoiceResult = pageTitle;
      if (invoiceResultScreenLabel) invoiceResultScreenLabel.textContent = pageTitle;
      if (invoiceResultTitle) invoiceResultTitle.textContent = pageTitle;
      if (invoiceResultPage) invoiceResultPage.setAttribute("aria-label", `${pageTitle}界面`);
      invoiceResultDetail.innerHTML = `
        <h3>${isDone ? "凭证信息" : "申请信息"}</h3>
        ${applicationState}
        <div class="order-detail-row"><span>凭证类型</span><strong>${documentType}</strong></div>
        <div class="order-detail-row"><span>小区</span><strong class="order-detail-location">${escapeHtml(order.community)}</strong></div>
        <div class="order-detail-row"><span>办理车辆</span><strong>${escapeHtml(orderVehicleText(order, { compact: true }))}</strong></div>
        ${!isDone ? `<div class="order-detail-row"><span>处理状态</span><strong>${invoiceProcessingLabel(order)}</strong></div>` : ""}`;
      invoiceResultFile.hidden = !isDone;
      if (isDone) {
        const files = Array.isArray(order.invoiceFiles) && order.invoiceFiles.length
          ? order.invoiceFiles
          : (order.invoiceNumber ? [{ number: order.invoiceNumber, completedAt: order.invoiceCompletedAt, type: order.invoiceType }] : []);
        invoiceResultFile.innerHTML = files.map((file) => `<div class="invoice-result-file-item" data-invoice-file-action><span class="icon-tile"><svg class="icon"><use href="#i-file"></use></svg></span><div><strong>${invoiceViewLabel(order)}</strong><span>${file.number || "电子凭证"}</span></div><button type="button">查看</button></div>`).join("");
      }
    }

    function openInvoiceResult(orderId = orderState.activeId, returnScreen = "invoiceList") {
      if (!ensureAuthenticated()) return;
      const order = getOrderById(orderId);
      if (!order) return;
      orderState.activeId = order.id;
      orderState.invoiceResultReturnScreen = returnScreen;
      renderInvoiceResult(order);
      showTab("invoiceResult");
    }

    function openOrderInvoice() {
      if (!ensureAuthenticated()) return;
      const order = getOrderById();
      if (!canApplyInvoice(order)) {
        showToast(invoiceUnavailableMessage(order));
        return;
      }
      renderInvoice(order);
      showTab("orderInvoice");
    }

    function handleOrderAction(action) {
      if (!ensureAuthenticated()) return;
      const order = getOrderById();
      if (!order) return;
      if (action === "renew") return openOrderRenewal();
      if (action === "swapVehicle") return openVehicleSwapFromOrder();
      if (action === "refund") return openOrderRefund();
      if (action === "invoice") return openOrderInvoice();
      if (action === "viewInvoice") return openInvoiceResult(order.id, "orderDetail");
      if (action === "invoiceProgress") return openInvoiceResult(order.id, "orderDetail");
      if (action === "deleteOrder") return deleteOrderFromUserView();
    }

    function submitRenewal() {
      if (!ensureAuthenticated()) return;
      const original = getOrderById();
      if (!canRenewOrder(original)) {
        showToast("仅有效中的月租可以续费");
        return;
      }
      const start = nextDate(original.end);
      const end = addOrderMonths(start, orderState.renewMonths);
      const overlap = getOrderVehicles(original)
        .map((vehicle) => findMonthlyRentOverlap({
          community: original.community,
          plate: vehicle.plate,
          start,
          end,
          excludeOrderId: original.id,
        }))
        .find(Boolean);
      if (overlap) {
        showToast("该车辆在此小区已有重叠月租，不能重复续费");
        return;
      }
      const monthlyRate = Math.round(original.amount / Math.max(original.months, 1));
      const newId = `AS20260825${String(orderState.records.length + 91).padStart(4, "0")}`;
      orderState.records.unshift({
        ...original,
        id: newId,
        orderNo: newId,
        type: "续费",
        vehicles: getOrderVehicles(original),
        vehicleCount: getOrderVehicles(original).length,
        start,
        end,
        months: orderState.renewMonths,
        amount: monthlyRate * orderState.renewMonths,
        createdAt: "2026-08-25 10:22",
        paymentAt: "2026-08-25 10:25",
        rentalStatus: "待生效",
        passStatus: "待生效",
        refundStatus: "未申请",
        invoiceStatus: "未申请",
      });
      orderState.filter = "all";
      orderState.subFilter = "all";
      orderFilterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.orderFilter === "all"));
      syncOrderSubTabs();
      renderOrderList();
      syncVehicleMonthlyState();
      syncHomeMonthlyCard();
      showTab("home");
      showToast("支付成功");
    }

    function submitRefund() {
      if (!ensureAuthenticated()) return;
      const order = getOrderById();
      const note = refundNote?.value.trim() || "";
      const savedAccount = getSavedRefundAccount();
      const payerName = getOrderPayerName(order);
      const hasPendingRefund = refundState.records.some((record) => {
        return record.orderNo === order.orderNo && record.status === "审批中";
      });
      if (order.refundStatus === "审批中" || hasPendingRefund) {
        showToast("该订单已有退款申请，不能重复提交");
        return;
      }
      if (!savedAccount.bank || !savedAccount.account || !savedAccount.phone) {
        showToast("请先填写退款账户");
        openRefundAccount();
        return;
      }
      if (orderState.refundReason === "其他原因" && !note) {
        showFieldError(refundNote, "请选择其他原因后，请补充具体说明");
        return;
      }
      const quote = getRefundQuote(order);
      const requestNo = `TK${order.orderNo.slice(2)}${String(refundState.records.length + 1).padStart(2, "0")}`;
      order.refundStatus = "审批中";
      order.passStatus = order.rentalStatus === "有效" ? "已暂停" : "待生效";
      refundState.records.unshift({
        id: requestNo,
        requestNo,
        orderNo: order.orderNo,
        community: order.community,
        garage: order.garage,
        plate: orderVehicleText(order, { compact: true }),
        vehicles: getOrderVehicles(order),
        originalPaidAmount: order.amount,
        start: order.start,
        end: order.end,
        remainingTerm: quote.remainingTerm,
        estimatedAmount: quote.estimatedAmount,
        approvedAmount: null,
        status: "审批中",
        reason: orderState.refundReason,
        note,
        refundRecipient: payerName,
        refundBank: savedAccount.bank,
        refundAccount: savedAccount.account,
        refundPhone: savedAccount.phone,
        submittedAt: "2026-08-25 10:18",
        approvedAt: "--",
        hasCompletedInvoice: order.invoiceStatus === "已完成",
      });
      renderOrderDetail(order.id);
      renderOrderList();
      renderInvoiceList();
      syncVehicleMonthlyState();
      syncHomeMonthlyCard();
      showTab("orderDetail");
      showToast("退款申请已提交");
    }

    function submitInvoice() {
      if (!ensureAuthenticated()) return;
      const order = getOrderById();
      if (!canApplyInvoice(order)) {
        showToast(invoiceUnavailableMessage(order));
        return;
      }
      const isVat = invoiceVoucherFor(order) === "增值税发票";
      const isCompanyInvoice = orderState.invoiceType === "company";
      const isSpecialInvoice = false;
      if (isVat && isCompanyInvoice) {
        const companyNameInput = Array.from(invoiceCompanyInputs).find((field) => field.dataset.invoiceCompanyField === "name");
        const companyTaxIdInput = Array.from(invoiceCompanyInputs).find((field) => field.dataset.invoiceCompanyField === "taxId");
        const companyName = companyNameInput?.value.trim() || "";
        const companyTaxId = companyTaxIdInput?.value.trim().toUpperCase() || "";
        if (!companyName) {
          showFieldError(companyNameInput, "请填写企业名称");
          return;
        }
        if (companyName.length < 2) {
          showFieldError(companyNameInput, "企业名称至少填写2个字");
          return;
        }
        if (!/^[0-9A-Z]{18}$/.test(companyTaxId)) {
          showFieldError(companyTaxIdInput, "请填写18位统一社会信用代码");
          return;
        }
        const requiredFields = Array.from(invoiceCompanyInputs).filter((field) => {
          return field.dataset.invoiceCompanyRequired === "base" || isSpecialInvoice;
        });
        if (requiredFields.some((field) => !field.value.trim())) {
          showToast(isSpecialInvoice ? "请完整填写企业专票资料" : "请填写企业名称和统一社会信用代码");
          return;
        }
      }
      if (isVat && orderState.invoiceType === "personal") {
        const personalTitle = invoicePersonalName?.value.trim() || "";
        if (!personalTitle) {
          showFieldError(invoicePersonalName, "请填写个人抬头");
          return;
        }
        if (personalTitle.length > 50) {
          showFieldError(invoicePersonalName, "个人抬头不能超过50个字");
          return;
        }
      }
      if (isVat && invoicePhone?.value.trim() && !isValidMobilePhone(invoicePhone.value)) {
        showFieldError(invoicePhone, "请输入正确的11位手机号");
        return;
      }
      const payerName = String(order.payerNameSnapshot || order.ownerNameSnapshot || userProfileState.name).trim();
      const payerPhone = String(order.payerPhoneSnapshot || order.ownerPhoneSnapshot || userProfileState.phone).trim();
      if (!isVat && (!payerName || !payerPhone)) {
        showToast("请先补充个人信息");
        return;
      }
      order.invoiceStatus = "申请中";
      order.invoiceRequestNo = `KP${order.orderNo.slice(2)}`;
      order.invoiceAppliedAt = "2026-08-25 10:18";
      order.invoiceType = isVat
        ? (isSpecialInvoice ? "增值税专用发票" : "增值税普通发票")
        : "非税电子票据";
      order.invoiceTitle = isVat
        ? (isCompanyInvoice ? invoiceCompanyInputs[0]?.value.trim() : invoicePersonalName?.value.trim())
        : payerName;
      if (!isVat) {
        order.payerNameSnapshot = payerName;
        order.payerPhoneSnapshot = payerPhone;
      }
      renderOrderDetail(order.id);
      renderOrderList();
      openInvoiceResult(order.id, "orderDetail");
      showToast(isVat ? "开票申请已提交" : "票据申请已提交");
    }

    document.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("input", () => clearFieldError(field));
    });

    [
      ...loginPhoneInputs,
      rentOwnerPhoneInput,
      rentVehicleProfilePhoneInput,
      personalPhoneInput,
      invoicePhone,
      refundAccountPhoneInput,
    ].filter(Boolean).forEach((input) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "").slice(0, 11);
      });
    });

    [
      rentOwnerIdCardInput,
      rentVehicleProfileIdCardInput,
      personalIdInput,
    ].filter(Boolean).forEach((input) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^\dXx]/g, "").toUpperCase().slice(0, 18);
      });
    });

    loginCodeInputs.forEach((input) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "").slice(0, 6);
      });
    });

    refundBankAccountInput?.addEventListener("input", () => {
      refundBankAccountInput.value = refundBankAccountInput.value.replace(/\D/g, "").slice(0, 30);
    });

    Array.from(invoiceCompanyInputs)
      .filter((input) => input.dataset.invoiceCompanyField === "taxId")
      .forEach((input) => {
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^\dA-Za-z]/g, "").toUpperCase().slice(0, 18);
        });
      });

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        showTab(button.dataset.tab);
      });
    });

    loginActions.forEach((button) => {
      button.addEventListener("click", signIn);
    });

    loginCodeActions.forEach((button) => {
      button.addEventListener("click", () => {
        const phoneInput = getLoginInput(button.dataset.loginCodeAction || "", "phone");
        if (!isValidMobilePhone(phoneInput?.value)) {
          showFieldError(phoneInput, "请输入正确的11位手机号");
          return;
        }
        showToast("验证码已发送");
      });
    });

    quickLoginButtons.forEach((button) => {
      button.addEventListener("click", startQuickLogin);
    });

    openSmsButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (!agreementChecked()) {
          showToast("请先勾选并同意协议");
          return;
        }
        document.body.dataset.toast = "hidden";
        showLoginView("sms");
      });
    });

    agreementToggles.forEach((agreement) => {
      agreement.addEventListener("click", () => {
        agreement.classList.toggle("is-checked");
        document.body.dataset.toast = "hidden";
      });
    });

    homeLoginActions.forEach((button) => {
      button.addEventListener("click", requireLogin);
    });

    cityActions.forEach((action) => {
      action.addEventListener("click", () => {
        if (!ensureAuthenticated()) return;
        showTab("city");
      });
    });

    searchActions.forEach((action) => {
      action.addEventListener("click", () => {
        if (!ensureAuthenticated()) return;
        if (garageQuery) garageQuery.value = "";
        updateGarageSearch();
        showTab("globalSearch");
        requestAnimationFrame(() => {
          if (garageQuery) garageQuery.focus();
        });
      });
    });

    rentFlowActions.forEach((action) => {
      action.addEventListener("click", () => {
        if (!ensureAuthenticated()) return;
        syncRentGarageList();
        showTab("rentFlow");
      });
    });

    homeRentActions.forEach((action) => {
      action.addEventListener("click", (event) => {
        event.stopPropagation();
        const garageCard = action.closest(".garage-card");
        if (garageCard) selectRentGarage(garageCard);
      });
    });

    orderListActions.forEach((action) => {
      action.addEventListener("click", () => {
        openOrderList(document.body.dataset.currentTab || "home");
      });
    });

    invoiceListActions.forEach((action) => {
      action.addEventListener("click", () => {
        openInvoiceList(document.body.dataset.currentTab || "personal");
      });
    });

    invoiceListBackButtons.forEach((button) => {
      button.addEventListener("click", () => showTab(orderState.invoiceListReturnScreen || "personal"));
    });

    invoiceResultBackButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (orderState.invoiceResultReturnScreen === "orderDetail") {
          renderOrderDetail();
          showTab("orderDetail");
          return;
        }
        renderInvoiceList();
        showTab("invoiceList");
      });
    });

    invoiceFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        orderState.invoiceFilter = button.dataset.invoiceFilter || "all";
        invoiceFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderInvoiceList();
      });
    });

    invoiceTypeFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        orderState.invoiceTypeFilter = button.dataset.invoiceTypeFilter || "all";
        invoiceTypeFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderInvoiceList();
      });
    });

    invoiceRecordList?.addEventListener("click", (event) => {
      const record = event.target.closest("[data-invoice-order-id]");
      if (record) openInvoiceResult(record.dataset.invoiceOrderId, "invoiceList");
    });

    invoiceResultFile?.addEventListener("click", (event) => {
      if (event.target.closest("[data-invoice-file-action]")) showToast("正在打开电子凭证");
    });

    refundListActions.forEach((action) => {
      action.addEventListener("click", () => {
        openRefundList(document.body.dataset.currentTab || "personal");
      });
    });

    refundListBackButtons.forEach((button) => {
      button.addEventListener("click", () => showTab(refundState.listReturnScreen || "personal"));
    });

    refundDetailBackButtons.forEach((button) => {
      button.addEventListener("click", () => {
        renderRefundRecordList();
        showTab(refundState.detailReturnScreen || "refundList");
      });
    });

    refundFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        refundState.filter = button.dataset.refundFilter || "all";
        refundFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderRefundRecordList();
      });
    });

    refundRecordList?.addEventListener("click", (event) => {
      const record = event.target.closest("[data-refund-record-id]");
      if (record) openRefundDetail(record.dataset.refundRecordId, "refundList");
    });

    document.querySelector("[data-refund-detail-footer]")?.addEventListener("click", (event) => {
      if (event.target.closest("[data-refund-cancel]")) cancelRefundApplication();
    });

    orderOpenButtons.forEach((button) => {
      button.addEventListener("click", () => {
        openOrderDetail(button.dataset.orderOpenId, document.body.dataset.currentTab || "home");
      });
    });

    homeRentRenew?.addEventListener("click", () => {
      if (!ensureAuthenticated()) return;
      const order = getOrderById(homeRentRenew.dataset.orderRenewId);
      if (!order) return;
      orderState.activeId = order.id;
      openOrderRenewal();
    });

    orderListBackButtons.forEach((button) => {
      button.addEventListener("click", () => showTab(orderState.listReturnScreen || "home"));
    });

    orderDetailBackButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (orderState.detailReturnScreen === "orderList") {
          renderOrderList();
          showTab("orderList");
          return;
        }
        showTab(orderState.detailReturnScreen || "home");
      });
    });

    orderWorkflowBackButtons.forEach((button) => {
      button.addEventListener("click", () => {
        renderOrderDetail();
        showTab("orderDetail");
      });
    });

    orderFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        orderState.filter = button.dataset.orderFilter || "all";
        orderState.subFilter = "all";
        orderFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        syncOrderSubTabs();
        renderOrderList();
      });
    });

    orderSubTabs?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-order-sub-filter]");
      if (!button) return;
      orderState.subFilter = button.dataset.orderSubFilter || "all";
      syncOrderSubTabs();
      renderOrderList();
    });

    orderList?.addEventListener("click", (event) => {
      const inlineAction = event.target.closest("[data-order-inline-action]");
      if (inlineAction) {
        event.stopPropagation();
        orderState.activeId = inlineAction.dataset.orderInlineId || "";
        handleOrderAction(inlineAction.dataset.orderInlineAction || "");
        return;
      }
      const card = event.target.closest("[data-order-open-id]");
      if (card) openOrderDetail(card.dataset.orderOpenId);
    });

    [orderDetailContent, orderDetailFooter].forEach((container) => {
      container?.addEventListener("click", (event) => {
        const button = event.target.closest("[data-order-action]");
        if (button) handleOrderAction(button.dataset.orderAction);
      });
    });

    renewMonthsInput?.addEventListener("input", () => {
      const parsedMonths = Number.parseInt(renewMonthsInput.value || "1", 10);
      orderState.renewMonths = Math.min(12, Math.max(1, Number.isFinite(parsedMonths) ? parsedMonths : 1));
      renderRenewal();
    });

    renewMonthButtons.forEach((button) => {
      button.addEventListener("click", () => {
        orderState.renewMonths = Number(button.dataset.renewMonth) || 1;
        renderRenewal();
      });
    });

    document.querySelector("[data-renew-submit]")?.addEventListener("click", submitRenewal);

    refundReasonButtons.forEach((button) => {
      button.addEventListener("click", () => {
        orderState.refundReason = button.dataset.refundReason || "不再使用月租";
        refundReasonButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      });
    });

    refundAccountOpenButton?.addEventListener("click", openRefundAccount);
    refundAccountBackButton?.addEventListener("click", () => showTab("orderRefund"));
    refundAccountSaveButton?.addEventListener("click", saveRefundAccount);

    document.querySelector("[data-refund-submit]")?.addEventListener("click", submitRefund);

    invoiceTypeButtons.forEach((button) => {
      button.addEventListener("click", () => setInvoiceType(button.dataset.invoiceType || "personal"));
    });

    invoiceSubmitButton?.addEventListener("click", submitInvoice);

    rentFlowBackActions.forEach((action) => {
      action.addEventListener("click", () => {
        showTab("rentFlow");
      });
    });

    rentVehiclePickerAction?.addEventListener("click", () => {
      syncRentVehiclePicker();
      showTab("rentVehicleSelect");
    });

    rentVehiclePickerBackActions.forEach((action) => {
      action.addEventListener("click", () => {
        showTab("rentVehicle");
      });
    });

    rentVehiclePickerComplete?.addEventListener("click", () => {
      if (rentVehiclePickerComplete.disabled) return;
      updateRentVehicleNextState();
      showTab("rentVehicle");
    });

    rentOwnerBackActions.forEach((action) => {
      action.addEventListener("click", () => {
        showTab("rentOwner");
      });
    });

    [rentOwnerNameInput, rentOwnerPhoneInput, rentOwnerIdCardInput].forEach((input) => {
      input?.addEventListener("input", () => {
        rentOwnerState.name = rentOwnerNameInput?.value.trim() || "";
        rentOwnerState.phone = rentOwnerPhoneInput?.value.trim() || "";
        rentOwnerState.idCard = rentOwnerIdCardInput?.value.trim() || "";
        updateRentOwnerNextState();
      });
    });

    if (rentOwnerNextButton) {
      rentOwnerNextButton.addEventListener("click", () => {
        if (rentOwnerNextButton.disabled) return;
        if (!saveRentOwnerProfile()) return;
        if (!hasBoundVehicle()) {
          openPrerequisiteVehicleForm();
          return;
        }
        continueRentVehicleStep();
      });
    }

    if (rentVehicleNextButton) {
      rentVehicleNextButton.addEventListener("click", () => {
        if (rentVehicleNextButton.disabled) return;
        const overlap = getRentOverlap();
        if (overlap) {
          openRentOverlapDialog(overlap);
          return;
        }
        startRentNoticeReading();
        showTab("rentNotice");
      });
    }

    rentNoticeAgreementAction?.addEventListener("click", () => {
      rentNoticeReadState.agreed = !rentNoticeReadState.agreed;
      updateRentNoticeNextState();
    });

    rentNoticePreviousPageButton?.addEventListener("click", () => {
      updateRentNoticePage(rentNoticeReadState.page - 1);
    });

    rentNoticeNextPageButton?.addEventListener("click", () => {
      updateRentNoticePage(rentNoticeReadState.page + 1);
    });

    rentNoticePageDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        updateRentNoticePage(Number(dot.dataset.rentNoticePageDot || 0));
      });
    });

    const rentNoticeViewport = document.querySelector(".notice-page-viewport");
    let rentNoticeTouchStartX = null;
    rentNoticeViewport?.addEventListener("touchstart", (event) => {
      rentNoticeTouchStartX = event.touches[0]?.clientX ?? null;
    }, { passive: true });
    rentNoticeViewport?.addEventListener("touchend", (event) => {
      if (rentNoticeTouchStartX === null) return;
      const touchEndX = event.changedTouches[0]?.clientX;
      const deltaX = touchEndX === undefined ? 0 : touchEndX - rentNoticeTouchStartX;
      rentNoticeTouchStartX = null;
      if (Math.abs(deltaX) < 40) return;
      updateRentNoticePage(rentNoticeReadState.page + (deltaX < 0 ? 1 : -1));
    }, { passive: true });

    if (rentNoticeNextButton) {
      rentNoticeNextButton.addEventListener("click", () => {
        if (rentNoticeNextButton.disabled) return;
        rentTermState.noticeChecked = true;
        syncRentConfirm();
        showTab("rentConfirm");
      });
    }

    if (rentSubmitButton) {
      rentSubmitButton.addEventListener("click", () => {
        if (!rentTermState.noticeChecked) {
          showToast("请先阅读并同意告知书");
          return;
        }
        const overlap = getRentOverlap();
        if (overlap) {
          showTab("rentVehicle");
          requestAnimationFrame(() => openRentOverlapDialog(overlap));
          return;
        }
        const order = createMonthlyRentOrder();
        renderOrderList();
        syncVehicleMonthlyState();
        syncHomeMonthlyCard();
        showTab("home");
        showToast("支付成功");
      });
    }

    rentOverlapCloseActions.forEach((action) => {
      action.addEventListener("click", closeRentOverlapDialog);
    });

    rentCancelPaymentButton?.addEventListener("click", () => {
      showTab("home");
      showToast("已取消支付");
    });

    document.querySelector(".rent-vehicle-options")?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-rent-vehicle-option]");
      if (option) selectRentVehicle(option);
    });

    vehicleManageActions.forEach((action) => {
      action.addEventListener("click", () => {
        if (!ensureAuthenticated()) return;
        updateVehicleCollection();
        showTab("vehicleManage");
      });
    });

    garageMapBackButtons.forEach((button) => {
      button.addEventListener("click", () => showTab(garageMapReturnScreen));
    });

    mapNavigateButton?.addEventListener("click", () => {
      showToast("正在唤起地图导航");
    });

    vehicleManageBackButtons.forEach((button) => {
      button.addEventListener("click", () => showTab("personal"));
    });

    vehicleFormBackButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const returnScreen = vehicleFormReturnScreen;
        vehicleFormReturnScreen = "vehicleManage";
        rentVehicleProfileRequired = false;
        if (returnScreen === "rentFlow") {
          showTab("rentFlow");
          return;
        }
        showTab("vehicleManage");
      });
    });

    vehicleFormOpenButtons.forEach((button) => {
      button.addEventListener("click", () => openVehicleForm());
    });

    vehicleList?.addEventListener("click", (event) => {
      const card = event.target.closest("[data-vehicle-card]");
      if (card) openVehicleForm(card);
    });

    vehiclePlateColorButtons.forEach((button) => {
      button.addEventListener("click", () => {
        vehicleFormState.plateColor = button.dataset.vehiclePlateColor || "蓝色车牌";
        vehicleFormState.plateColorCode = button.dataset.vehiclePlateColorCode || plateColorCodeFor(vehicleFormState.plateColor);
        syncVehicleChoiceState();
        syncPlateInput();
        closePlateColorSheet();
      });
    });

    plateColorSheetAction?.addEventListener("click", openPlateColorSheet);

    document.querySelectorAll("[data-plate-color-close]").forEach((action) => {
      action.addEventListener("click", closePlateColorSheet);
    });

    document.querySelectorAll("[data-vehicle-claim-close]").forEach((action) => {
      action.addEventListener("click", closeVehicleClaimDialog);
    });

    vehicleClaimPrimary?.addEventListener("click", () => {
      if (vehicleClaimDialog?.dataset.mode === "unbind") {
        unbindCurrentVehicle();
        return;
      }
      closeVehicleClaimDialog();
      showToast("客服电话：0592-1234567");
    });

    vehicleUnbindButton?.addEventListener("click", openVehicleUnbindDialog);

    vehicleSwapSourceBackActions.forEach((button) => {
      button.addEventListener("click", returnFromVehicleSwap);
    });

    vehicleSwapBackActions.forEach((button) => {
      button.addEventListener("click", () => {
        renderVehicleSwapSources();
        showTab("vehicleSwapSource");
      });
    });

    vehicleSwapPickerBackActions.forEach((button) => {
      button.addEventListener("click", () => {
        renderVehicleSwap();
        showTab("vehicleSwap");
      });
    });

    vehicleSwapTargetPicker?.addEventListener("click", () => {
      renderVehicleSwapOptions();
      showTab("vehicleSwapSelect");
    });

    vehicleSwapUnbindAction?.addEventListener("click", prepareVehicleSwapUnbind);

    vehicleSwapOptions?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-vehicle-swap-plate]");
      if (option) selectVehicleSwap(option);
    });

    vehicleSwapSourceOptions?.addEventListener("click", (event) => {
      const addAction = event.target.closest("[data-vehicle-swap-add]");
      if (addAction) {
        openAddOrderVehicle();
        return;
      }
      const option = event.target.closest("[data-vehicle-swap-source-plate]");
      if (option) selectVehicleSwapSource(option);
    });

    vehicleSwapSubmit?.addEventListener("click", submitVehicleSwap);

    plateCharacterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        openPlateKeyboard(button.dataset.plateCharacter || "province");
      });
    });

    vehiclePlateInput?.addEventListener("input", () => {
      vehicleFormState.plateSuffix = cleanPlateSuffix(vehiclePlateInput.value);
      syncPlateInput();
    });

    vehiclePlateInput?.addEventListener("focus", () => {
      openPlateKeyboard("suffix");
    });

    plateKeyboardKeys?.addEventListener("click", (event) => {
      const key = event.target.closest("[data-plate-key]");
      const character = key?.dataset.plateKey || "";
      if (!character) return;

      if (vehicleFormState.activePlateSlot === "province") {
        vehicleFormState.plateProvince = character;
        vehicleFormState.plateLetter = "";
        vehicleFormState.plateSuffix = "";
        vehicleFormState.activePlateSlot = "letter";
      } else if (vehicleFormState.activePlateSlot === "letter") {
        vehicleFormState.plateLetter = character;
        vehicleFormState.plateSuffix = "";
        vehicleFormState.activePlateSlot = "suffix";
      } else if (vehicleFormState.plateSuffix.length < plateSuffixLimit()) {
        vehicleFormState.plateSuffix = cleanPlateSuffix(`${vehicleFormState.plateSuffix}${character}`);
      }
      syncPlateInput();
    });

    document.querySelector("[data-plate-key-clear]")?.addEventListener("click", () => {
      if (vehicleFormState.activePlateSlot === "province") {
        vehicleFormState.plateProvince = "";
        vehicleFormState.plateLetter = "";
        vehicleFormState.plateSuffix = "";
      } else if (vehicleFormState.activePlateSlot === "letter") {
        vehicleFormState.plateLetter = "";
        vehicleFormState.plateSuffix = "";
      } else {
        vehicleFormState.plateSuffix = "";
      }
      syncPlateInput();
    });

    document.querySelector("[data-plate-key-delete]")?.addEventListener("click", () => {
      if (vehicleFormState.activePlateSlot === "suffix") {
        vehicleFormState.plateSuffix = vehicleFormState.plateSuffix.slice(0, -1);
      } else if (vehicleFormState.activePlateSlot === "letter") {
        vehicleFormState.plateLetter = "";
        vehicleFormState.activePlateSlot = "province";
      } else {
        vehicleFormState.plateProvince = "";
      }
      syncPlateInput();
    });

    document.querySelector("[data-plate-key-done]")?.addEventListener("click", closePlateKeyboard);

    vehicleGradeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        vehicleFormState.grade = button.dataset.vehicleGrade || "小型车";
        vehicleFormState.gradeCode = button.dataset.vehicleGradeCode || gradeCodeFor(vehicleFormState.grade);
        syncVehicleChoiceState();
      });
    });

    vehiclePhotoGrid?.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-vehicle-photo-remove]");
      if (remove) {
        event.stopPropagation();
        const index = Number(remove.dataset.vehiclePhotoRemove);
        vehicleFormState.photos.splice(index, 1);
        renderVehiclePhotos();
        showToast("已删除车辆照片");
        return;
      }

      const preview = event.target.closest("[data-vehicle-photo-thumb]");
      if (preview) {
        openVehiclePhotoPreview(Number(preview.dataset.vehiclePhotoThumb));
        return;
      }

      if (vehicleForm?.dataset.vehicleLocked === "true") return;
      if (event.target.closest("[data-vehicle-photo-upload]")) addVehiclePhoto();
    });

    document.querySelector("[data-vehicle-photo-preview-close]")?.addEventListener("click", closeVehiclePhotoPreview);
    vehiclePhotoPreview?.addEventListener("click", (event) => {
      if (event.target === vehiclePhotoPreview) closeVehiclePhotoPreview();
    });

    vehicleSaveButton?.addEventListener("click", saveVehicle);

    rentStartDateInput?.addEventListener("input", updateRentTermState);
    rentDatePickerOpenAction?.addEventListener("click", openRentDatePicker);
    rentDatePickerCancelAction?.addEventListener("click", closeRentDatePicker);
    rentDatePickerConfirmAction?.addEventListener("click", confirmRentDatePicker);
    rentDatePickerSheet?.addEventListener("click", (event) => {
      if (event.target === rentDatePickerSheet) closeRentDatePicker();
    });
    rentDateColumns?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-rent-date-part]");
      if (!option || option.disabled) return;
      rentDatePickerState[option.dataset.rentDatePart] = Number(option.dataset.rentDateValue);
      normalizeRentDatePickerState();
      renderRentDatePicker();
    });
    rentMonthsInput?.addEventListener("input", updateRentTermState);

    rentMonthOptions.forEach((button) => {
      button.addEventListener("click", () => {
        if (rentMonthsInput) rentMonthsInput.value = button.dataset.rentMonthOption || "1";
        updateRentTermState();
      });
    });

    document.querySelectorAll("[data-rent-vehicle-back]").forEach((button) => {
      button.addEventListener("click", () => showTab("rentVehicle"));
    });

    rentNoticeBackActions.forEach((button) => {
      button.addEventListener("click", () => showTab("rentNotice"));
    });

    garageMoreActions.forEach((button) => {
      button.addEventListener("click", () => {
        if (!ensureAuthenticated()) return;
        syncFullGarageList();
        resetGarageListControls();
        applyGarageListControls();
        showTab("garageList");
      });
    });

    garageFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        garageListState.filter = button.dataset.garageFilter;
        garageFilterButtons.forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        applyGarageListControls();
      });
    });

    garageSortButtons.forEach((button) => {
      button.addEventListener("click", () => {
        garageListState.sort = button.dataset.garageSort;
        garageSortButtons.forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        applyGarageListControls();
      });
    });

    cityOptions.forEach((option) => {
      option.addEventListener("click", () => {
        setCurrentCity(option.dataset.selectCity);
      });
    });

    if (refreshCityButton) {
      refreshCityButton.addEventListener("click", () => {
        refreshCityButton.textContent = "定位成功";
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(() => {
          refreshCityButton.textContent = "点击刷新";
        }, 1200);
      });
    }

    if (garageQuery) {
      garageQuery.addEventListener("input", updateGarageSearch);
    }

    if (rentGarageQuery) {
      rentGarageQuery.addEventListener("input", applyRentGarageControls);
    }

    rentAreaButtons.forEach((button) => {
      button.addEventListener("click", () => {
        rentGarageState.area = button.dataset.rentArea || "all";
        rentAreaButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        applyRentGarageControls();
      });
    });

    searchKeywordButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (!garageQuery) return;
        garageQuery.value = button.dataset.searchKeyword;
        updateGarageSearch();
      });
    });

    garageSelectActions.forEach((card) => {
      card.addEventListener("click", () => {
        showTab("home");
      });
    });

    personalLoginActions.forEach((card) => {
      card.addEventListener("click", () => {
        if (document.body.dataset.auth !== "authed") {
          requireLogin();
          return;
        }
        openPersonalInfo();
      });
    });

    personalInfoActions.forEach((action) => {
      action.addEventListener("click", openPersonalInfo);
    });

    personalAvatarAction?.addEventListener("click", () => {
      personalAvatarFileInput?.click();
    });

    personalAvatarFileInput?.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        showToast("请选择图片文件");
        event.target.value = "";
        return;
      }
      if (userProfileState.avatarUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(userProfileState.avatarUrl);
      }
      userProfileState.avatarUrl = URL.createObjectURL(file);
      accountState.profiles[accountState.current] = { ...userProfileState };
      syncPersonalProfile();
      event.target.value = "";
      showToast("头像已更新");
    });

    aboutActions.forEach((action) => {
      action.addEventListener("click", () => showTab("about"));
    });

    settingsActions.forEach((action) => {
      action.addEventListener("click", () => {
        if (!ensureAuthenticated()) return;
        showTab("settings");
      });
    });

    accountManageActions.forEach((action) => {
      action.addEventListener("click", () => {
        if (!ensureAuthenticated()) return;
        if (accountManagePage) accountManagePage.dataset.accountDeleteDialog = "closed";
        showTab("accountManage");
      });
    });

    aboutBackButtons.forEach((button) => {
      button.addEventListener("click", () => showTab("personal"));
    });

    settingsBackButtons.forEach((button) => {
      button.addEventListener("click", () => showTab("personal"));
    });

    accountManageBackButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (accountManagePage) accountManagePage.dataset.accountDeleteDialog = "closed";
        showTab("settings");
      });
    });

    accountDeleteAction?.addEventListener("click", () => {
      if (accountManagePage) accountManagePage.dataset.accountDeleteDialog = "open";
    });

    accountDeleteCloseActions.forEach((action) => {
      action.addEventListener("click", () => {
        if (accountManagePage) accountManagePage.dataset.accountDeleteDialog = "closed";
      });
    });

    accountDeleteConfirmAction?.addEventListener("click", () => {
      if (accountManagePage) accountManagePage.dataset.accountDeleteDialog = "closed";
      document.body.dataset.auth = "guest";
      showTab("home");
      showToast("账号已注销");
    });

    policyActions.forEach((action) => {
      action.addEventListener("click", () => {
        const label = action.dataset.policyAction === "privacy" ? "个人信息保护政策" : "用户服务协议";
        showToast(`正在查看${label}`);
      });
    });

    personalInfoBackButtons.forEach((button) => {
      button.addEventListener("click", () => showTab("personal"));
    });

    personalInfoSaveButton?.addEventListener("click", savePersonalInfo);

    backHomeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        document.body.dataset.toast = "hidden";
        showTab("home");
      });
    });

    if (logoutAction) {
      logoutAction.addEventListener("click", () => {
        document.body.dataset.auth = "guest";
        showTab("home");
      });
    }

    showLoginView("main");
    assignInitialAccountVehicles();
    document.body.dataset.account = accountState.current;
    buildPlateKeyboard();
    syncPlateInput();
    const defaultRentStartDate = formatRentDate(rentDateMinimum);
    if (rentStartDateInput) rentStartDateInput.value = defaultRentStartDate;
    if (rentStartDateDisplay) rentStartDateDisplay.textContent = defaultRentStartDate;
    syncRentDatePickerState(defaultRentStartDate);
    renderCommunityCatalog();
    applyCommunityProjectMetadata();
    syncFullGarageList();
    syncRentGarageList();
    applyGarageListControls();
    updateGarageSearch();
    updateVehicleCollection();
    syncHomeMonthlyCard();
    syncPersonalProfile();
    syncOrderSubTabs();
    renderOrderList();
    renderOrderDetail();
    renderInvoiceList();
    const initialTab = "home";
    history.replaceState({ screen: initialTab, loginView: "main" }, "", location.href);
    showTab(initialTab, { pushHistory: false });
