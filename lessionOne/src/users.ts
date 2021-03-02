type User = {
  firstName: string;
  job?: string;
};

interface User1 {
  firstName: string;
  lastName: number;
  job?: string;
}

// job -> Optional Property (thuộc tính tùy chọn)
const susan: User = {
  firstName: 'Hoang',
};

const asia: User1 = {
  firstName: 'sda',
  lastName: 0,
};

