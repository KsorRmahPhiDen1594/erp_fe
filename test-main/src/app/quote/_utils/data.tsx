export const modules = [
  // { id: 1, name: 'Thảo luận', price: 0, category: 'Công cụ' },
  { id: 2, name: 'Ghi chú', price: 0, category: 'Công cụ' },
  { id: 3, name: 'Danh bạ', price: 0, category: 'Công cụ' },
  { id: 4, name: 'Lịch', price: 0, category: 'Công cụ' },
  { id: 5, name: 'Dashboards', price: 0, category: 'Công cụ' },
  { id: 6, name: 'CRM', price: 198000, category: 'Bán hàng' },
  { id: 7, name: 'Bán hàng', price: 99000, category: 'Bán hàng' },
  { id: 8, name: 'Quản lý dịch vụ', price: 198000, category: 'Bán hàng' },
  { id: 9, name: 'Quản lý kho', price: 297000, category: 'Quản lý kho & sản xuất' },
  { id: 10, name: 'Sản xuất', price: 396000, category: 'Quản lý kho & sản xuất' },
  { id: 11, name: 'Mua hàng', price: 99000, category: 'Quản lý kho & sản xuất' },
  { id: 12, name: 'Báo trí', price: 198000, category: 'Quản lý kho & sản xuất' },
  { id: 13, name: 'Chất lượng', price: 198000, category: 'Quản lý kho & sản xuất' },
  { id: 14, name: 'Kế toán VAS', price: 396000, category: 'Kế toán' },
  { id: 15, name: 'Hóa đơn', price: 99000, category: 'Kế toán' },
  { id: 16, name: 'Chi phí', price: 99000, category: 'Kế toán' },
  { id: 17, name: 'Tài liệu', price: 198000, category: 'Kế toán' },
  { id: 18, name: 'Chí ký', price: 198000, category: 'Kế toán' },
  { id: 19, name: 'Nhân viên', price: 99000, category: 'Nhân sự' },
  { id: 20, name: 'Tuyển dụng', price: 99000, category: 'Nhân sự' },
  { id: 21, name: 'Nghỉ phép', price: 99000, category: 'Nhân sự' },
  { id: 22, name: 'Đánh giá', price: 99000, category: 'Nhân sự' },
  { id: 23, name: 'Thời gian biểu', price: 99000, category: 'Nhân sự' },
];

export function calculatePrice(
  userCount: number,
  selectedModules: number[],
  isYearly: boolean
) {
  // Giá cơ bản cho người dùng (125.000 đ/tháng/người)
  const baseUserPrice = 125000 * userCount;
  
  // Giá của các modules được chọn
  const modulesPrice = modules
    .filter((module) => selectedModules.includes(module.id))
    .reduce((sum, module) => sum + module.price, 0);

  // Tổng giá = giá cơ bản + giá modules
  let totalPrice = baseUserPrice + modulesPrice;

  // Điều chỉnh giá Quản lý kho & sản xuất theo số lượng người dùng (nếu có)
  if (selectedModules.some((id: number) => [9, 10, 11, 12, 13].includes(id))) {
    const warehousePrice = Math.max(1920000 / 10 * userCount, 297000 * userCount);
    // Thay thế giá modules kho bằng giá điều chỉnh
    const warehouseModulesPrice = modules
      .filter((module) => selectedModules.includes(module.id) && [9, 10, 11, 12, 13].includes(module.id))
      .reduce((sum, module) => sum + module.price, 0);
    
    totalPrice = baseUserPrice + (modulesPrice - warehouseModulesPrice) + warehousePrice;
  }

  // Giảm giá 10% nếu chọn hàng năm
  const discount = isYearly ? 0.9 : 1;
  
  return Math.round(totalPrice * discount);
}
