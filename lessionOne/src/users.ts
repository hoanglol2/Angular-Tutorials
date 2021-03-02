// tslint:disable-next-line:typedef
// Union Type - Pipe Symbol (|) (hoac la cai nay hoac la cai kia)
function listen(port: string | number) {
//    do something
};

listen('3000');
listen(3000);
listen(true);

// s;

// Union Type cho gia tri tra ve cua 1 ham
function getSomeThing(): string | number {
  // return '12';
  return 1;
};

// Intersection Type - ket hop nhieu loai type voi nhau (AND)
//  được dùng rất nhiều trong việc thiết kế hệ thống type cho những thư viện UI Components
// marge type.
type StyleProp = {
  backgroundColor: string;
};

type ButtonProps = {
  onClick: (event: MouseEvent) => void;
} & StyleProp;
