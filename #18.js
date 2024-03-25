//!#18 Switch Case statements - Tối Ưu Hóa If else
let day = 1;
let dayName;

switch (day) {
    case 0:
        dayName = "Chủ Nhật";
        break;
    case 1:
        dayName = "Thứ Hai";
        break;
    case 2:
        dayName = "Thứ Ba";
        break;
    case 3:
        dayName = "Thứ Tư";
        break;
    case 4:
        dayName = "Thứ Năm";
        break;
    case 5:
        dayName = "Thứ Sáu";
        break;
    case 6:
        dayName = "Thứ Bảy";
        break;
    default:
        dayName = "Không xác định";
}

//ở đoạn mã này let day = 1 sẽ in ra thứ 2 do 1 trùng vs case 1,
//nếu xóa break ở case 1 thì sẽ in ra thứ 3

console.log("Hôm nay là: " + dayName);
