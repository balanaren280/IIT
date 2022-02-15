/* Drilling down example */
SELECT d.the_year, ROUND(SUM(f.extended_sales_total),2) AS act_sales_by_brand_month
  FROM fact_sales f, dim_date d, dim_product p, dim_customer c
 WHERE f.date_key = d.date_key
   AND f.product_key = p.product_key
   AND f.customer_key = c.customer_key 
 GROUP BY d.the_year;
 
SELECT d.the_year, d.the_month, p.brand, p.category, ROUND(SUM(f.extended_sales_total),2) AS act_sales_by_brand_month
  FROM fact_sales f, dim_date d, dim_product p, dim_customer c
 WHERE f.date_key = d.date_key
   AND f.product_key = p.product_key
   AND f.customer_key = c.customer_key 
 GROUP BY d.the_year, d.the_month, p.brand, p.category;

/* Drilling accross example */
SELECT fcst.*, act.act_sales_by_brand_month
  FROM 
        (
          SELECT m.the_year, m.the_month, b.brand, ROUND(SUM(f.forecast_sales_total),2) AS fcst_sales_by_brand_month
            FROM fact_forecast f, dim_month m, dim_brand b
           WHERE f.month_key = m.month_key
             AND f.brand_key = b.brand_key
           GROUP BY m.the_year, m.the_month, b.brand
        ) fcst
  LEFT OUTER JOIN  
        (
          SELECT d.the_year, d.the_month, p.brand, ROUND(SUM(f.extended_sales_total),2) AS act_sales_by_brand_month
            FROM fact_sales f, dim_date d, dim_product p, dim_customer c
           WHERE f.date_key = d.date_key
             AND f.product_key = p.product_key
             AND f.customer_key = c.customer_key 
           GROUP BY d.the_year, d.the_month, p.brand
        ) act 
     ON fcst.the_year = act.the_year
    AND fcst.the_month = act.the_month
    AND fcst.brand = act.brand;

    