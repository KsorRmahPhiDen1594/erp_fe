'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { modules, calculatePrice } from './_utils/data';
// import QuoteForm from './_utils/quote-form';

export default function QuotePage() {
  const [userCount, setUserCount] = useState(10);
  const [selectedModules, setSelectedModules] = useState<number[]>([]);
const categories = Array.from(new Set(modules.map((m) => m.category)));
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();

  const totalPrice = calculatePrice(userCount, selectedModules, isYearly);

  const handleRegister = () => {
    const quoteData = { userCount, selectedModules, isYearly, totalPrice };
    router.push(`/quote/confirm?data=${encodeURIComponent(JSON.stringify(quoteData))}`);
  };
  //Khi có be thì fetch từ url
  // const fetchData = async () =>{
  //  try{
  //   const response = await fetch("");
  //   if(response.ok){
  //     const data = await response.json();
  //       setSelectedModules(data);
  //   }
  //  }catch(e){
  //   console.log(e);
  //  }
  // }

return (
    <>
      <div className="w-screen bg-gradient-to-b from-[#64225a] to-[#a2238f] text-white p-4 text-center">
        <p className="text-xl font-bold">Báo giá phần mềm quản trị doanh nghiệp ERPVIET</p>
        <p>Hơn 60 ứng dụng cốt lõi và 20.000 ứng dụng tùy chỉnh, được 8 triệu người dùng trên 200 quốc gia tin tưởng sử dụng.</p>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Yêu cầu báo giá</h1>
        <p className="mb-4 text-gray-600">
          Hơn 60 tính năng được tích hợp với 200+ tính năng tùy chỉnh, dự án 8 triệu người dùng trên 200 quốc gia tin tưởng sử dụng.
        </p>

        <div className="flex justify-between items-start mb-4">
          <div>
            <label>Chọn số lượng người dùng</label>
            <input
              type="number"
              value={userCount}
              onChange={(e) => setUserCount(Number(e.target.value))}
              min="1"
              className="border p-2 ml-2"
            />
            <span> - {125000 * userCount} đ/tháng</span>
          </div>
          <div className="border p-2">
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={isYearly}
                  onChange={(e) => setIsYearly(e.target.checked)}
                />{' '}
                Hàng năm
              </label>
              <div>Hàng tháng</div>
            </div>
            <p>10 Người dùng: {totalPrice.toLocaleString()} đ</p>
            <p>1 Người dùng: {(totalPrice / 10).toLocaleString()} đ</p>
            <p>Tổng /tháng (2): {(totalPrice / 12).toLocaleString()} đ</p>
            <p>(2) Tổng hàng năm: {(totalPrice * 2).toLocaleString()} đ</p>
            <p>Dự tính chi phí triển khai: 1.920.000 đ</p>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 w-full" onClick={handleRegister}>
              Đăng ký
            </button>
          </div>
        </div>

  {categories.map((category) => (
        <div key={category} className="mb-4">
          <h2 className="text-xl font-semibold">{category}</h2>
          <div className={category === 'Dịch vụ' ? '' : 'flex flex-wrap gap-2'}>
            {modules
              .filter((m) => m.category === category)
              .map((module) => (
                <div
                  key={module.id}
                  className={
                    category === 'Dịch vụ'
                      ? 'flex items-center mb-2'
                      : 'flex items-center border p-2 rounded'
                  }
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
                  />
                  <span className="ml-2">{module.name} - {module.price} đ/tháng</span>
                </div>
              ))}
          </div>
        </div>
      ))}

      <h2 className="text-xl font-semibold mb-2">Bảng giá bổ sung</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">STT</th>
            <th className="border p-2">Dịch vụ</th>
            <th className="border p-2">ĐVT</th>
            <th className="border p-2">Đơn giá (VNĐ)</th>
            <th className="border p-2">Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td>Tư vấn trực tiếp</td>
            <td>Giờ</td>
            <td>680.000</td>
            <td>Tư vấn tại văn phòng khách hàng</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td>Tư vấn online</td>
            <td>Giờ</td>
            <td>500.000</td>
            <td>Qua Skype, Teamviewer, Zalo, Viber</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td>Bào tao tại hừng đan trực tiếp</td>
            <td>Giờ</td>
            <td>450.000</td>
            <td>Gồm đào tạo & hướng dẫn, &lt; 10 người/buổi</td>
          </tr>
          <tr>
            <td className="border p-2">4</td>
            <td>Bào tao tại hừng đan online</td>
            <td>Giờ</td>
            <td>300.000</td>
            <td>Gồm đào tạo & hướng dẫn qua Skype, Teamviewer, Zalo, Viber</td>
          </tr>
          <tr>
            <td className="border p-2">5</td>
            <td>Tuy chỉnh hệ thống</td>
            <td>Giờ</td>
            <td>360.000</td>
            <td></td>
          </tr>
          <tr>
            <td className="border p-2">6</td>
            <td>Triển khai trực tiếp</td>
            <td>Giờ</td>
            <td>480.000</td>
            <td>Gồm đào tạo & hướng dẫn, thiết lập hệ thống, kiểm tra dữ liệu</td>
          </tr>
          <tr>
            <td className="border p-2">7</td>
            <td>Triển khai online</td>
            <td>Giờ</td>
            <td>360.000</td>
            <td>Gồm đào tạo & hướng dẫn, thiết lập hệ thống, kiểm tra dữ liệu qua Skype, Teamviewer, Zalo, Viber</td>
          </tr>
        </tbody>
      </table>

      {/* <QuoteForm /> */}
    </div>
    </>
  );
}