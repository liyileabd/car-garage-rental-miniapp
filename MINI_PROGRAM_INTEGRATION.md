# 湖里国投月租车位小程序对接说明

本文档用于给 PC 管理后台或负责 PC 端开发的 AI 阅读，说明当前小程序原型的页面、数据表、字段、状态和业务规则。

## 1. 项目位置

Open Design 原型目录：

`/Users/ruanyun/Library/Application Support/Open Design/namespaces/release-stable/data/projects/project-902f/`

主要文件：

| 文件 | 用途 |
|---|---|
| `index.html` | 原型入口，只负责页面容器 |
| `loader.js` | 加载各页面 HTML 和公共图标 |
| `app.js` | 原型交互、示例数据、状态切换和业务模拟 |
| `styles/base.css` | 公共视觉样式 |
| `pages/*/index.html` | 各业务页面 HTML |
| `pages/*/styles.css` | 页面预留样式文件 |

当前是纯前端原型，没有真实数据库、真实支付、税务局接口或一路停车接口。PC 端正式开发时，应以本文档的数据结构为基础建立后端表和 API。

## 2. 账号规则

系统模拟两个账号：

| 登录方式 | 账号类型 | 数据 |
|---|---|---|
| 微信快捷登录 | 有数据账号 `wechat` | 有个人信息、车辆、订单、退款记录和开票记录 |
| 验证码登录 | 无数据账号 `sms` | 没有个人信息、车辆、月租、订单和售后数据 |

要求：

- 账号之间的数据必须隔离。
- 默认打开小程序时进入微信有数据账号，不强制每次登录。
- 登录、退出和切换账号后，个人资料、车辆、订单、退款记录必须一起切换。
- PC 后台查看数据时必须按用户 ID 过滤，不能只按车牌或手机号模糊关联。

## 3. 数据表建议

正式后端建议至少建立以下表：

```text
user_account              用户账号
user_profile              用户个人资料
community_project         小区项目配置
parking_garage            车库和车位资源
vehicle                   用户车辆
rent_order                月租订单
order_vehicle             订单办理车辆关系
refund_request             退款申请
refund_account             退款账户
invoice_record             发票或非税票据记录
project_notice             项目告知书
project_fee_item           项目费用项目
payment_record             支付记录
operation_log              操作日志
```

## 4. 用户账号表 `user_account`

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 用户 ID，主键 |
| `login_type` | enum | `wechat` 微信快捷登录，`sms` 验证码登录 |
| `openid` | string nullable | 微信用户标识，正式环境使用加密或不可逆关联值 |
| `phone` | string | 手机号 |
| `status` | enum | `active`、`disabled` |
| `created_at` | datetime | 创建时间 |
| `updated_at` | datetime | 更新时间 |

## 5. 用户资料表 `user_profile`

| 字段 | 类型 | 说明 |
|---|---|---|
| `user_id` | string | 关联 `user_account.id` |
| `nickname` | string | 昵称，默认可为“湖里车主” |
| `avatar_url` | string nullable | 头像地址 |
| `name` | string | 姓名 |
| `id_card` | string | 身份证号，正式环境必须脱敏或加密存储 |
| `phone` | string | 联系手机号 |
| `created_at` | datetime | 创建时间 |
| `updated_at` | datetime | 更新时间 |

当前原型示例用户：

```json
{
  "nickname": "湖里车主",
  "name": "张先生",
  "phone": "13800006688",
  "idCard": "350211199001011234"
}
```

## 6. 小区项目表 `community_project`

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 项目 ID，例如 `COMMUNITY-001` |
| `community_name` | string | 小区展示名称 |
| `project_name` | string | 项目全称 |
| `project_type` | enum | `公司自营项目`、`区财政代管项目` |
| `district` | string | 行政区 |
| `street` | string | 街道 |
| `status` | enum | `active`、`disabled` |
| `monthly_price` | decimal | 默认月租价格，可被费用配置覆盖 |
| `created_at` | datetime | 创建时间 |
| `updated_at` | datetime | 更新时间 |

当前原型示例项目：

- 银霞花园一期：公司自营项目，湖里区，月租 300 元。
- 金林湾花园 B 区：区财政代管项目，湖里区，月租 320 元。
- 湖边御景 D 区：公司自营项目，思明区，月租 280 元。

## 7. 车库资源表 `parking_garage`

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 车库 ID |
| `project_id` | string | 关联项目 |
| `garage_name` | string | 车库名称 |
| `total_spaces` | int | 总车位数 |
| `rented_spaces` | int | 已租车位数 |
| `distance` | decimal | 距当前定位距离，单位 km，原型模拟值 |
| `status` | enum | `available`、`full`、`disabled` |
| `updated_at` | datetime | 资源更新时间 |

车位是否可办理由后台计算：

```text
rented_spaces < total_spaces => 可办理
rented_spaces >= total_spaces => 已满
```

## 8. 车辆表 `vehicle`

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 车辆 ID |
| `user_id` | string | 所属用户 |
| `plate` | string | 完整车牌，例如 `闽D 12345` |
| `plate_color` | enum | 蓝牌、绿牌、黄牌、白牌、黑牌 |
| `plate_color_code` | string | 车牌颜色代码，例如蓝牌 `02`、绿牌 `26` |
| `grade` | enum | 其他、小型车、中型车、大型车 |
| `grade_code` | string | 车辆大小代码 |
| `vehicle_type_code` | string | 车辆类型代码 |
| `appearance` | string | 外观颜色 |
| `photos` | array | 车辆照片地址列表，原型为演示字段 |
| `bound` | boolean | 是否存在外部绑定或限制 |
| `status` | enum | `active`、`deleted` |
| `created_at` | datetime | 创建时间 |
| `updated_at` | datetime | 更新时间 |

车辆功能：

- 查看车辆列表。
- 新增车辆。
- 编辑车辆。
- 删除或解绑车辆。
- 车牌按省份、字母、号码分段录入。
- 车牌颜色支持蓝牌、绿牌、黄牌、白牌、黑牌。
- 订单变更车辆时只能选择当前用户的车辆。

## 9. 月租订单表 `rent_order`

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 订单 ID |
| `order_no` | string | 订单号，PC 后台使用；小程序订单卡片不展示订单号 |
| `user_id` | string | 用户 ID |
| `project_id` | string | 小区项目 ID |
| `community` | string | 下单时的小区名称快照 |
| `garage` | string | 下单时的车库名称快照 |
| `type` | enum | `新办`、`续费` |
| `start` | date | 租期开始日期 |
| `end` | date | 租期结束日期 |
| `months` | int | 月数 |
| `amount` | decimal | 订单实付金额 |
| `created_at` | datetime | 创建时间 |
| `payment_at` | datetime nullable | 支付成功时间 |
| `rental_status` | enum | `有效`、`待生效`、`过期`、`终止` |
| `pass_status` | enum | `已开通`、`已暂停`、`已结束` |
| `refund_status` | enum | `未申请`、`待审批`、`已通过`、`已驳回` |
| `invoice_status` | enum | `未申请`、`申请中`、`已完成` |
| `project_type` | string | 项目类型快照 |
| `source_order_id` | string nullable | 续费订单关联的原订单 |
| `created_by` | enum | `mini_program`、`pc_admin`、`system` |
| `hidden_from_user` | boolean | 用户在小程序删除订单后为 `true`，仅控制当前用户端是否展示，不删除后台订单 |
| `hidden_at` | datetime nullable | 用户删除订单的时间 |
| `hidden_by` | string nullable | 用户端操作时可记录为 `user`，后台不提供删除权限 |
| `hidden_reason` | string nullable | 用户删除订单的原因或默认记录 |
| `updated_at` | datetime | 更新时间 |

订单状态规则：

- 原型阶段微信支付默认成功。
- 新办支付成功后直接返回首页。
- 续费生成新订单，原订单保留。
- 续费订单状态为 `待生效`。
- 已过期订单不能续费。
- 待生效订单允许退款。
- 订单状态、退款状态、开票状态必须分开保存。
- 订单卡片不展示订单号。
- 租期展示为“开始日期 至 结束日期”。
- 用户在小程序删除订单后，订单列表不再展示该订单；后台订单、支付、退款、开票、通行记录仍保留。

## 10. 订单车辆关系表 `order_vehicle`

订单最多绑定两辆车，不建议把第二辆车直接拼接到订单的 `plate` 字符串中。

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 关系记录 ID |
| `order_id` | string | 订单 ID |
| `vehicle_id` | string | 车辆 ID |
| `plate_snapshot` | string | 办理时车牌快照 |
| `sequence` | int | 车辆顺序，1 或 2 |
| `vehicle_role` | enum | `primary`、`secondary` |
| `status` | enum | `active`、`removed` |
| `bound_at` | datetime | 加入订单时间 |
| `removed_at` | datetime nullable | 移除时间 |

车辆规则：

- 一个订单最多两辆车。
- 至少保留一辆车。
- 第一辆车为主办理车辆。
- 第二辆车先进场享受月租权限，后进场按临停计费。
- 月租期间可以变更车辆。
- 可以新增第二辆车或移除第二辆车。
- 订单车辆操作完成后同步一路停车。
- 暂时不限制同一车辆、同一小区、租期重叠，用户可以重复办理。
- 小程序订单卡片显示两个车牌时，第一辆保持主字号，第二辆使用较小字号，不显示“等 2 辆”。

## 11. 支付记录表 `payment_record`

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 支付记录 ID |
| `order_id` | string | 订单 ID |
| `user_id` | string | 用户 ID |
| `channel` | enum | `wechat` |
| `amount` | decimal | 支付金额 |
| `status` | enum | `success`、`failed`、`refunded` |
| `transaction_no` | string nullable | 微信支付交易号 |
| `paid_at` | datetime nullable | 支付时间 |
| `refunded_at` | datetime nullable | 退款时间 |
| `created_at` | datetime | 创建时间 |

## 12. 退款申请表 `refund_request`

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 退款申请 ID，例如 `TK202608200014` |
| `request_no` | string | 退款申请编号 |
| `order_id` | string | 原订单 ID |
| `user_id` | string | 用户 ID |
| `reason` | string | 退款原因 |
| `note` | string | 用户补充说明 |
| `original_paid_amount` | decimal | 原支付金额 |
| `remaining_term` | string | 剩余租期展示值 |
| `estimated_amount` | decimal | 系统模拟退款金额 |
| `approved_amount` | decimal nullable | 后台审批通过后确认的退款金额 |
| `status` | enum | `待审批`、`已通过`、`已驳回` |
| `submitted_at` | datetime | 提交时间 |
| `approved_at` | datetime nullable | 审批时间 |
| `approver_id` | string nullable | PC 审批人 |
| `approval_note` | string nullable | 审批意见 |

退款规则：

- 退款待审批放在售后，不反复提醒联系客服。
- 提交退款后小程序显示“售后处理中”。
- 退款金额按剩余天数比例模拟，正式系统由后台计算。
- 第一次填写退款账户后保存，后续自动带出但允许修改。

## 13. 退款账户表 `refund_account`

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 账户 ID |
| `user_id` | string | 用户 ID |
| `account_type` | enum | 当前原型主要模拟银行卡账户 |
| `bank_name` | string | 开户行 |
| `account_no` | string | 收款账号，正式环境需脱敏 |
| `account_phone` | string | 账户联系电话 |
| `is_default` | boolean | 是否默认账户 |
| `created_at` | datetime | 创建时间 |
| `updated_at` | datetime | 更新时间 |

## 14. 开票和票据表 `invoice_record`

一个订单可以对应多张发票或票据，例如物业费和月租费分开开具。因此不能把发票字段全部放在订单表中。

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 发票或票据记录 ID |
| `order_id` | string | 订单 ID |
| `user_id` | string | 用户 ID |
| `voucher_type` | enum | `增值税发票`、`非税电子票据` |
| `invoice_type` | enum | `普通发票`、`专用发票`，非税票据为空 |
| `fee_item` | string | 费用项目，例如物业费、月租费，后台可自定义 |
| `amount` | decimal | 本张票据金额 |
| `payer_name` | string | 缴款人；非税票据以此为核心 |
| `title` | string nullable | 增值税发票抬头；非税票据不填写 |
| `tax_no` | string nullable | 税号 |
| `bank_name` | string nullable | 专票信息 |
| `bank_account` | string nullable | 专票信息 |
| `address` | string nullable | 专票信息 |
| `phone` | string nullable | 专票信息 |
| `status` | enum | `未申请`、`申请中`、`已完成` |
| `request_no` | string nullable | 开票申请编号 |
| `invoice_no` | string nullable | 发票号码或票据号码 |
| `file_url` | string nullable | PC 上传的文件地址 |
| `applied_at` | datetime nullable | 申请时间 |
| `completed_at` | datetime nullable | 上传完成时间 |
| `uploaded_by` | string nullable | PC 操作人 |

开票规则：

- 不接税务局开票接口。
- PC 后台上传发票或非税票据文件。
- 小程序只负责申请、查看和下载。
- 未申请时显示“申请开票”。
- 处理中显示开票进度。
- 已开出后显示“查看发票”或“查看票据”，不能继续显示“查看开票进度”。
- 非税票据不填写票据抬头，使用缴款人。

## 15. 项目配置表

PC 后台需要支持以下项目级配置：

### `project_payment_account`

小区项目可配置不同收款账户，至少包含：

- `project_id`
- `account_name`
- `account_no`
- `bank_name`
- `wechat_mch_id`（如果正式接微信支付）
- `status`

### `project_fee_item`

费用项目不能固定写死为物业费和租金，应支持后台自定义：

- `project_id`
- `name`
- `code`
- `unit`
- `amount`
- `enabled`
- `sort_no`

### `project_notice`

告知书由 PC 上传，小程序按项目展示原文件内容：

- `id`
- `project_id`
- `title`
- `file_url`
- `file_type`
- `version`
- `required`
- `sort_no`
- `status`
- `uploaded_by`
- `created_at`

## 16. 页面和功能清单

### 登录

- 微信快捷登录：进入有数据账号。
- 验证码登录：进入无用户数据账号。
- 手机号验证和验证码输入属于登录流程内部页面。
- 不做证件识别认证。

### 首页

- 展示当前账号信息。
- 展示当前有效月租。
- 展示月租小区、车牌、剩余时间和截止日期。
- 入口：月租办理、车辆管理、订单记录、个人中心。
- 展示广告位和可办理小区列表。

### 月租办理

页面流程：

```text
选择小区 -> 选择车辆与租期 -> 阅读告知书 -> 确认支付 -> 支付成功返回首页
```

功能：

- 选择城市和小区。
- 查看车库距离、车位数量、月租价格。
- 选择最多两辆车。
- 选择租期：1、3、6、12 个月。
- 填写或确认个人资料。
- 展示项目告知书。
- 原型阶段默认微信支付成功。
- 支付成功不进入办理回执页，直接返回首页。

### 车辆管理

- 查看车辆列表。
- 新增、编辑、删除车辆。
- 车牌按省份、字母、号码录入。
- 显示车辆类型、外观颜色、车牌颜色。
- 月租订单中的车辆操作必须关联订单。

### 订单

- 订单列表。
- 订单详情。
- 续费。
- 变更车辆。
- 新增第二辆车。
- 移除第二辆车，但至少保留一辆。
- 申请退款。
- 查看售后处理状态。
- 申请开票、查看开票进度、查看已上传发票或票据。

### 个人中心

- 个人信息。
- 车辆管理入口。
- 订单记录入口。
- 开票记录。
- 退款记录。
- 关于小程序。
- 设置。
- 账号管理和退出登录。

## 17. 小程序到 PC 后台的操作对接

| 小程序操作 | PC 后台对应能力 |
|---|---|
| 新办月租 | 查看订单、支付记录、办理车辆、项目和费用明细 |
| 续费 | 查看新续费订单与原订单关联 |
| 变更车辆 | 审计订单车辆关系，并同步一路停车 |
| 新增第二辆车 | 维护 `order_vehicle` 第二条关系 |
| 移除第二辆车 | 将关系标记为 removed，保留历史记录 |
| 申请退款 | PC 售后审批 |
| 退款审批 | 回写退款状态和审批通过金额 |
| 申请开票 | PC 查看申请并上传文件 |
| 上传发票 | 小程序显示查看和下载 |
| 配置小区 | 维护项目、车库、价格、收款账户 |
| 配置告知书 | 上传项目级原文件并设置展示顺序 |

## 18. 推荐 API

```text
POST   /api/auth/wechat-login
POST   /api/auth/sms-login
POST   /api/auth/logout
GET    /api/me

GET    /api/projects
GET    /api/projects/:projectId
GET    /api/projects/:projectId/garages

GET    /api/vehicles
POST   /api/vehicles
PUT    /api/vehicles/:vehicleId
DELETE /api/vehicles/:vehicleId

GET    /api/orders
GET    /api/orders/:orderId
POST   /api/orders
POST   /api/orders/:orderId/renew
GET    /api/orders/:orderId/vehicles
POST   /api/orders/:orderId/vehicles
PUT    /api/orders/:orderId/vehicles/:relationId
DELETE /api/orders/:orderId/vehicles/:relationId

POST   /api/orders/:orderId/refunds
GET    /api/refunds
GET    /api/refunds/:refundId

GET    /api/invoices
POST   /api/orders/:orderId/invoices
GET    /api/invoices/:invoiceId
GET    /api/invoices/:invoiceId/download
```

PC 后台接口另外需要：

```text
GET    /admin/projects
POST   /admin/projects
PUT    /admin/projects/:projectId
POST   /admin/projects/:projectId/notices
POST   /admin/projects/:projectId/fee-items
POST   /admin/projects/:projectId/payment-accounts
GET    /admin/orders
GET    /admin/refunds
PUT    /admin/refunds/:refundId/approve
PUT    /admin/refunds/:refundId/reject
GET    /admin/invoices
POST   /admin/invoices/:invoiceId/upload
```

## 19. 订单删除权限与数据保留规则

### 19.1 结论

PC 后台不提供删除订单权限。订单删除入口放在小程序订单列表，由当前用户自行操作。这里的删除是让订单从当前用户端隐藏，不是物理删除数据库记录。

订单可能同时关联支付、退款、发票/票据、车辆通行权限和一路停车同步记录，因此不能直接删除 `rent_order`、`payment_record`、`refund_request`、`invoice_record`、`order_vehicle` 和操作日志。

现有 PC PRD 已明确：

- 已取消、支付失败和待支付订单仍需保留，用于排查和留痕。
- 已发布或产生业务数据的小区不能物理删除，历史订单、缴费、退款、开票和通行记录必须保留。
- 用户注销不等于删除业务数据，历史订单仍需保留。

### 19.2 PC 端允许的操作

| 场景 | PC 操作 | 是否影响小程序 |
|---|---|---|
| 用户未支付或支付失败 | 关闭订单、标记取消 | 订单仍保留，用户可查看结果，不再显示支付入口 |
| 已支付但业务需要终止 | 走退款审批，完成后标记已终止 | 不删除订单，用户仍可查看订单、退款和处理结果 |
| 支付异常 | 补查支付状态或提交支付异常修正 | 保留订单和操作日志 |
| 用户查看已结束订单 | 用户在小程序删除订单 | 当前用户端订单列表不再显示，PC 后台仍可查询 |
| 订单信息有误 | 走更正/作废流程 | 保留原记录、原因、操作人和时间，不能覆盖原始支付事实 |

### 19.3 用户端隐藏规则

“删除订单”必须满足：

- 订单数据库记录仍然存在。
- 小程序查询订单时过滤 `hidden_from_user = true`。
- 支付、退款、开票、通行和操作日志仍能通过订单 ID 查询。
- PC 端不提供删除或恢复用户端显示的按钮。
- 用户端删除必须记录用户 ID、时间和原因。
- 订单删除不自动退款、不终止月租、不撤销通行权限；这些业务必须单独走退款或终止流程。

确认弹窗使用明确文案：“删除后将从当前账号的订单列表中移除，支付、退款和开票记录仍会保留。”

### 19.4 用户端行为

- 用户端提供删除订单功能，由用户自行管理订单列表。
- 待支付、支付失败和已取消订单可以保留查看，但不能重复支付已关闭或已取消的订单。
- 仅已过期、已终止等已结束订单允许删除；有效中、待生效、退款审批中订单不能删除。
- 用户注销后，订单仍保留在后台和数据表中；账号重新登录时按账号关联关系决定是否展示。

## 20. 对接时必须注意

1. 不要把订单多车牌存成“闽D 12345 等 2 辆”这种展示字符串，必须使用订单车辆关系表。
2. 订单、退款、开票是三个独立状态体系，不能共用一个 status 字段。
3. 续费订单必须新建，不能覆盖原订单。
4. 订单车辆变更必须记录操作前后车辆，并同步一路停车。
5. 小区项目必须支持独立收款账户、费用项目、凭证类型和告知书配置。
6. 非税票据不填写发票抬头，字段以缴款人为核心。
7. 发票文件由 PC 上传，小程序端只查看和下载。
8. 所有用户数据必须按 `user_id` 隔离。
9. 退款账户允许保存默认值，但用户下次申请时仍可修改。
10. 小程序不需要定位、搜索、客服中心和证件识别认证功能。
11. 不要实现 `DELETE /admin/orders/:orderId` 或批量物理删除接口。
12. 小程序删除订单时更新 `hidden_from_user`，订单查询按用户 ID 和该字段过滤。
13. 用户端删除、订单关闭、取消、作废和退款都必须写入 `operation_log`。
