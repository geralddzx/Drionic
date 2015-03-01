json.(@comments) do |comment|
	json.id comment.id
	json.content comment.content
	json.created_at comment.created_at.to_formatted_s(:long_ordinal)
end