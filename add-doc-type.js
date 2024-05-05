const axios = require("axios");

async function login() {
	const apiUrl = "https://vimaru.b4e.vn/api/v2/auth/login";

	const qttcAccount = {
		username: "nghhao@vimaru.edu.vn",
		password: "12345678",
	};

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	return axios
		.post(apiUrl, qttcAccount, config)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

async function createDocType(authData, createData) {
	const apiUrl = "https://vimaru.b4e.vn/api/v2/document-types";
	const config = {
		headers: {
			"Content-Type": "application/json",
			"x-term-id": authData.tokenContent.terms[0].termId,
			Authorization: `Bearer ${authData.accessToken}`,
		},
	};

	return axios
		.post(apiUrl, createData, config)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}
const docTypes = [
	{
		name: "Nghị quyết",
		shortName: "NQ",
	},
	{
		name: "Quyết định",
		shortName: "QĐ",
	},
	{
		name: "Chỉ thị",
		shortName: "CT",
	},
	{
		name: "Quy chế",
		shortName: "QC",
	},
	{
		name: "Quy định",
		shortName: "QYĐ",
	},
	{
		name: "Thông cáo",
		shortName: "TQ",
	},
	{
		name: "Thông báo",
		shortName: "TB",
	},
	{
		name: "Hướng dẫn",
		shortName: "HD",
		expiredDate: 13,
	},
	{
		name: "Chương trình",
		shortName: "CTr",
		expiredDate: 7,
	},
	{
		name: "Kế hoạch",
		shortName: "KH",
		expiredDate: 10,
	},
	{
		name: "Phương án",
		shortName: "PA",
		expiredDate: 12,
	},
	{
		name: "Đề án",
		shortName: "ĐA",
		expiredDate: 15,
	},
	{
		name: "Dự án",
		shortName: "DA",
		expiredDate: 20,
	},
	{
		name: "Báo cáo",
		shortName: "BC",
		expiredDate: 12,
	},
	{
		name: "Biên bản",
		shortName: "BB",
		expiredDate: 3,
	},
	{
		name: "Tờ trình",
		shortName: "TTr",
		expiredDate: 2,
	},
	{
		name: "Hợp đồng",
		shortName: "HĐ",
		expiredDate: 5,
	},
	{
		name: "Công văn",
		shortName: "CV",
		expiredDate: 3,
	},
	{
		name: "Công điện",
		shortName: "CĐ",
		expiredDate: 2,
	},
	{
		name: "Bản ghi nhớ",
		shortName: "BGN",
		expiredDate: 10,
	},
	{
		name: "Bản thỏa thuận",
		shortName: "BTT",
		expiredDate: 5,
	},
	{
		name: "Giấy ủy quyền",
		shortName: "GUQ",
		expiredDate: 5,
	},
	{
		name: "Giấy mời",
		shortName: "GM",
		expiredDate: 5,
	},
	{
		name: "Giấy giới thiệu",
		shortName: "GGT",
		expiredDate: 5,
	},
	{
		name: "Giấy nghỉ phép",
		shortName: "GNP",
		expiredDate: 1,
	},
	{
		name: "Phiếu gửi",
		shortName: "PG",
		expiredDate: 2,
	},
	{
		name: "Phiếu chuyển",
		shortName: "PC",
		expiredDate: 2,
	},
	{
		name: "Phiếu báo",
		shortName: "PB",
		expiredDate: 3,
	},
	{
		name: "Thư công",
		shortName: "TC",
		expiredDate: 4,
	},
];
async function createDocType() {
	const authData = await login();
	const result = await Promise.all(
		docTypes.map(async (type) => {
			const parseDocType = createSchema.parse(type);
			await createDocType(authData, parseDocType);
		})
	);
	logger.info(result);
}
createDocType();
