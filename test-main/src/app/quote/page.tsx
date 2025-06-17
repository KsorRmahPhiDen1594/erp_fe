'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { modules, calculatePrice } from './_utils/data';

export default function QuotePage() {
  const [userCount, setUserCount] = useState(10);
  const [selectedModules, setSelectedModules] = useState<number[]>([]);
  const categories = Array.from(new Set(modules.map((m) => m.category)));
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();
  const tableRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const totalPrice = calculatePrice(userCount, selectedModules, isYearly);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current && pricingRef.current) {
        const tableRect = tableRef.current.getBoundingClientRect();
        const pricingRect = pricingRef.current.getBoundingClientRect();

        // Khi phần bảng giá chạm đầu "Bảng giá dịch vụ bổ sung", bật sticky
        if (tableRect.top <= pricingRect.bottom + 20 && tableRect.top >= 0) {
          pricingRef.current.style.position = 'sticky';
          pricingRef.current.style.top = '20px'; // Cách đầu 20px
        } else {
          pricingRef.current.style.position = 'relative';
          pricingRef.current.style.top = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegister = () => {
    const quoteData = { userCount, selectedModules, isYearly, totalPrice };
    router.push(`/quote/confirm?data=${encodeURIComponent(JSON.stringify(quoteData))}`);
  };

  return (
    <>
      <div className="w-screen bg-gradient-to-b from-[#64225a] to-[#a2238f] text-white p-4 text-center">
        <p className="text-xl font-bold">Báo giá phần mềm quản trị doanh nghiệp ERPVIET</p>
        <p>Hơn 60 ứng dụng cốt lõi và 20.000 ứng dụng tùy chỉnh, được 8 triệu người dùng trên 200 quốc gia tin tưởng sử dụng.</p>
      </div>
      
      <div className="container mx-auto p-4">
        {/* User Count Selection - Full Width */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Chọn số lượng người dùng</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={userCount}
              onChange={(e) => setUserCount(Number(e.target.value))}
              min="1"
              className="border border-gray-300 rounded px-3 py-2 w-24"
            />
            <span className="text-sm text-gray-600">- {(125000 * userCount).toLocaleString()} đ/tháng</span>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6">
            {/* Main Content - Left Side */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-6">Chọn ứng dụng của bạn</h1>

              {/* Modules Selection */}
              {categories.map((category) => (
                <div key={category} className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">{category}</h2>
                  <div className={category === 'Dịch vụ' ? 'space-y-2' : 'grid grid-cols-1 md:grid-cols-2 gap-3'}>
                    {modules
                      .filter((m) => m.category === category)
                      .map((module) => (
                        <div
                          key={module.id}
                          className={`
                            flex items-center p-3 rounded-lg border hover:border-blue-300 transition-colors
                            ${selectedModules.includes(module.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
                            ${category === 'Dịch vụ' ? 'w-full' : ''}
                          `}
                        >
                          <input
                            type="checkbox"
                            checked={selectedModules.includes(module.id)}
                            onChange={(e) =>
                              setSelectedModules(
                                e.target.checked
                                  ? [...selectedModules, module.id]
                                  : selectedModules.filter((id) => id !== module.id)
                              )
                            }
                            className="mr-3 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <div className="flex items-center flex-1">
                            {/* Icons for specific categories */}
                            {category === 'Bán hàng' && (
                              <>
                                {module.name === 'CRM' && <img src="https://via.placeholder.com/24" alt="CRM Icon" className="mr-2" />}
                                {module.name === 'Bán hàng' && <img src="https://via.placeholder.com/24" alt="Bán hàng Icon" className="mr-2" />}
                                {module.name === 'Quản lý dịch vụ' && <img src="https://via.placeholder.com/24" alt="Quản lý dịch vụ Icon" className="mr-2" />}
                              </>
                            )}
                            {category === 'Quản lý kho & sản xuất' && (
                              <>
                                {module.name === 'Quản lý kho' && <img src="https://via.placeholder.com/24" alt="Quản lý kho Icon" className="mr-2" />}
                                {module.name === 'Sản xuất' && <img src="https://via.placeholder.com/24" alt="Sản xuất Icon" className="mr-2" />}
                                {module.name === 'Mua hàng' && <img src="https://via.placeholder.com/24" alt="Mua hàng Icon" className="mr-2" />}
                                {module.name === 'Báo trí' && <img src="https://via.placeholder.com/24" alt="Báo trí Icon" className="mr-2" />}
                                {module.name === 'Chất lượng' && <img src="https://via.placeholder.com/24" alt="Chất lượng Icon" className="mr-2" />}
                              </>
                            )}
                            <div className="flex flex-col">
                              <span className="font-medium">{module.name}</span>
                              <span className="text-sm text-gray-600">{module.price.toLocaleString()} đ/tháng</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}

              {/* Additional Services Table */}
              <div ref={tableRef} className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Bảng giá dịch vụ bổ sung</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">STT</th>
                        <th className="border border-gray-300 p-3 text-left">Dịch vụ</th>
                        <th className="border border-gray-300 p-3 text-left">ĐVT</th>
                        <th className="border border-gray-300 p-3 text-left">Đơn giá (VNĐ)</th>
                        <th className="border border-gray-300 p-3 text-left">Ghi chú</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3">1</td>
                        <td className="border border-gray-300 p-3">Tư vấn trực tiếp</td>
                        <td className="border border-gray-300 p-3">Giờ</td>
                        <td className="border border-gray-300 p-3 font-medium">680.000</td>
                        <td className="border border-gray-300 p-3">Tư vấn tại văn phòng khách hàng</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3">2</td>
                        <td className="border border-gray-300 p-3">Tư vấn online</td>
                        <td className="border border-gray-300 p-3">Giờ</td>
                        <td className="border border-gray-300 p-3 font-medium">500.000</td>
                        <td className="border border-gray-300 p-3">Qua Skype, Teamviewer, Zalo, Viber</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3">3</td>
                        <td className="border border-gray-300 p-3">Đào tạo & hướng dẫn trực tiếp</td>
                        <td className="border border-gray-300 p-3">Giờ</td>
                        <td className="border border-gray-300 p-3 font-medium">450.000</td>
                        <td className="border border-gray-300 p-3">Gồm đào tạo & hướng dẫn, {"<"} 10 người/buổi</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3">4</td>
                        <td className="border border-gray-300 p-3">Đào tạo & hướng dẫn online</td>
                        <td className="border border-gray-300 p-3">Giờ</td>
                        <td className="border border-gray-300 p-3 font-medium">300.000</td>
                        <td className="border border-gray-300 p-3">Gồm đào tạo & hướng dẫn qua Skype, Teamviewer, Zalo, Viber</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3">5</td>
                        <td className="border border-gray-300 p-3">Tùy chỉnh hệ thống</td>
                        <td className="border border-gray-300 p-3">Giờ</td>
                        <td className="border border-gray-300 p-3 font-medium">360.000</td>
                        <td className="border border-gray-300 p-3"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3">6</td>
                        <td className="border border-gray-300 p-3">Triển khai trực tiếp</td>
                        <td className="border border-gray-300 p-3">Giờ</td>
                        <td className="border border-gray-300 p-3 font-medium">480.000</td>
                        <td className="border border-gray-300 p-3">Gồm đào tạo & hướng dẫn, thiết lập hệ thống, kiểm tra dữ liệu</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-3">7</td>
                        <td className="border border-gray-300 p-3">Triển khai online</td>
                        <td className="border border-gray-300 p-3">Giờ</td>
                        <td className="border border-gray-300 p-3 font-medium">360.000</td>
                        <td className="border border-gray-300 p-3">Gồm đào tạo & hướng dẫn, thiết lập hệ thống, kiểm tra dữ liệu qua Skype, Teamviewer, Zalo, Viber</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Pricing Summary - Right Side */}
            <div className="w-80" ref={pricingRef}>
              <div className="self-start border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
                {/* Toggle Switch for Monthly/Yearly */}
                <div className="mb-4">
                  <div className="flex items-center justify-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setIsYearly(false)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        !isYearly
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Hàng tháng
                    </button>
                    <button
                      onClick={() => setIsYearly(true)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        isYearly
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Hàng năm
                      {isYearly && <span className="ml-1 text-xs text-green-600">(Giảm 10%)</span>}
                    </button>
                  </div>
                </div>

                {/* Pricing Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Số người dùng:</span>
                    <span className="font-medium">{userCount}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Modules đã chọn:</span>
                    <span className="font-medium">{selectedModules.length}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tổng giá:</span>
                    <span className="font-medium">{totalPrice.toLocaleString()} đ</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Giá/người dùng:</span>
                    <span className="font-medium">{(totalPrice / userCount).toLocaleString()} đ</span>
                  </div>
                  
                  {isYearly ? (
                    <>
                      <div className="flex justify-between text-green-600">
                        <span>Tiết kiệm hàng năm:</span>
                        <span className="font-medium">
                          {((totalPrice / 0.9 * 12 * 0.1)).toLocaleString()} đ
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tổng hàng năm:</span>
                        <span className="font-medium text-lg">{(totalPrice * 12).toLocaleString()} đ</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tổng hàng tháng:</span>
                      <span className="font-medium text-lg">{totalPrice.toLocaleString()} đ</span>
                    </div>
                  )}
                  
                  <hr className="my-3" />
                  <div className="flex justify-between text-blue-600">
                    <span>Chi phí triển khai:</span>
                    <span className="font-medium">1.920.000 đ</span>
                  </div>
                </div>

                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 mt-4 w-full rounded-lg font-medium transition-colors"
                  onClick={handleRegister}
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}