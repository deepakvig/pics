import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID DlHj27WR5s0n5y_3Sut4BIv2KqHCFfK5HbkHgfQURAc'
	}
});