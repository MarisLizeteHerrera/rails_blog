50.times do
  Blog.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence
  )
end

puts "100 Products Seeded"