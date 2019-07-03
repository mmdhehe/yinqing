//获取所有的兄弟元素
export function sibligs(value, tag) {
	var arr = value.siblings("tag");
	return arr;
}