export interface BlogPost {
	id: number;
	source_locale: "id" | "en" | "zh";
	locale: "id" | "en" | "zh";
	translated_from_locale: "id" | "en" | "zh" | null;
	translation_status: "draft" | "machine_translated" | "reviewed";
	ai_generated: boolean;
	title: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	banner_url: string | null;
	content: string;
	slug: string;
	created_at: string;
	updated_at: string;
	published_at: string | null;
	author_name: string | null;
	status: "draft" | "published" | "archived";
}

export interface BlogResponse {
	success: boolean;
	message: string;
	data: {
		blogs: BlogPost[];
		pagination: {
			page: number;
			limit: number;
			total: number;
			totalPages: number;
			hasNext: boolean;
			hasPrev: boolean;
		};
	};
}

export interface BlogDetailResponse {
	success: boolean;
	message: string;
	data: {
		blog: BlogPost;
	};
}
