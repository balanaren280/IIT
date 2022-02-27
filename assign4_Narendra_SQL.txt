INSERT INTO fact_orders(product_skey, customer_skey, DateSkey, sales_quantity, unit_sales_amout, extended_sales_amount)

SELECT IFNULL(c.customer_skey, -1),
IFNULL(j.junk_skey, -1),
IFNULL(d.DateSkey, -1), 
IFNULL (p.product_skey, -1)   


SELECT c.customer_skey 
FROM sales_transaction s
LEFT OUTER JOIN dim_customer c
ON s.customer_id = c.customer_id
 
AND c.order_date >= c.effective_start_date AND s.order_date < c.effective_end_date

SELECT j.junk_skey
FROM sales_transaction s
LEFT OUTER JOIN dim_junk j
ON s.order_priority = j.order_priority 
AND s.ship_mode = j.ship_mode

SELECT d.DateSkey
FROM sales_transaction s
LEFT OUTER JOIN dim_date d
ON d.TheDate = d.TheDate

SELECT p.product_skey
FROM sales_transaction s
LEFT OUTER JOIN dim_product p
ON s.product_id = p.product_id

AND s.order_date >= p.effective_start_date AND s.order_date < p.effective_end_date

SELECT DISTINCT ship_mode, order_priority
FROM sales_transaction;
		