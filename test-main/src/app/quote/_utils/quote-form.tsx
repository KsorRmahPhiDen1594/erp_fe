'use client';

import { useForm } from 'react-hook-form';

export default function QuoteForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: Record<string, any>) => {
    alert(`Yêu cầu gửi thành công: ${JSON.stringify(data)}`);
    // Thêm logic gọi API sau
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <input
        {...register('name')}
        placeholder="Tên"
        className="border p-2 mr-2"
      />
      <input
        {...register('email')}
        placeholder="Email"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Gửi
      </button>
    </form>
  );
}